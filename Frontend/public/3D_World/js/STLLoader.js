/**
 * STLLoader for Three.js r79
 * Compatible implementation for older Three.js versions
 */
THREE.STLLoader = function (manager) {
  this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.STLLoader.prototype = {
  constructor: THREE.STLLoader,

  load: function (url, onLoad, onProgress, onError) {
    var scope = this;

    // Use XMLHttpRequest for Three.js r79 compatibility
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    request.onload = function () {
      if (request.status === 200 || request.status === 0) {
        try {
          // Check if response is actually STL data or HTML error page
          if (!request.response || request.response.byteLength === 0) {
            if (onError)
              onError(new Error("STL file is empty or not found: " + url));
            return;
          }
          var geometry = scope.parse(request.response, url);
          onLoad(geometry);
        } catch (error) {
          error.message = "Error parsing STL (" + url + "): " + error.message;
          if (onError) onError(error);
        }
      } else {
        if (onError)
          onError(
            new Error(
              "Failed to load STL file (HTTP " + request.status + "): " + url,
            ),
          );
      }
    };

    request.onerror = function () {
      if (onError) onError(new Error("Network error loading STL file"));
    };

    request.onprogress = function (event) {
      if (onProgress && event.lengthComputable) {
        onProgress(event);
      }
    };

    request.send();
  },

  parse: function (data, url) {
    // Validate data before parsing
    if (!data || data.byteLength === 0) {
      throw new Error(
        "STL data is empty or invalid" + (url ? " for file: " + url : ""),
      );
    }

    // Check if response is HTML (likely a 404 page)
    var sampleBytes = new Uint8Array(
      data.slice(0, Math.min(100, data.byteLength)),
    );
    var sampleStr = String.fromCharCode.apply(null, sampleBytes).toLowerCase();
    if (
      sampleStr.indexOf("<!doctype") !== -1 ||
      sampleStr.indexOf("<html") !== -1 ||
      sampleStr.indexOf("<!DOCTYPE") !== -1
    ) {
      throw new Error(
        "Received HTML instead of STL data (file not found or wrong path): " +
          (url || "unknown"),
      );
    }

    var isBinary = function () {
      try {
        var expect, face_size, n_faces, reader;
        reader = new DataView(data);
        face_size = (32 / 8) * 3 + (32 / 8) * 3 * 3 + 16 / 8;
        n_faces = reader.getUint32(80, true);
        expect = 80 + 32 / 8 + n_faces * face_size;
        return expect === reader.byteLength;
      } catch (e) {
        return false;
      }
    };

    var binToStr = function (array) {
      var s = "";
      for (var i = 0, il = array.length; i < il; i++) {
        s += String.fromCharCode(array[i]);
      }
      return s;
    };

    var isASCII = function () {
      try {
        var data_s = binToStr(new Uint8Array(data));
        return data_s.indexOf("facet") !== -1;
      } catch (e) {
        return false;
      }
    };

    return isBinary() && !isASCII() ? parseBinary() : parseASCII();

    function parseASCII() {
      var geometry = new THREE.Geometry();
      var data_s = binToStr(new Uint8Array(data));
      var result = data_s.match(/facet[\s\S]*?endfacet/g);

      // Check if result is null or empty
      if (!result || result.length === 0) {
        var preview = data_s.substring(0, 200).replace(/\n/g, " ");
        throw new Error(
          "No facets found in STL ASCII data. File may be empty, corrupted, or not a valid STL file. Preview: " +
            preview,
        );
      }

      for (var i = 0; i < result.length; i++) {
        var vertex_result = result[i].match(
          /vertex[\s]+([\-+]?\d+\.?\d*e?[\-+]?\d*?)[\s]+([\-+]?\d+\.?\d*e?[\-+]?\d*?)[\s]+([\-+]?\d+\.?\d*e?[\-+]?\d*?)/g,
        );
        var normal_result = result[i].match(
          /normal[\s]+([\-+]?\d+\.?\d*e?[\-+]?\d*?)[\s]+([\-+]?\d+\.?\d*e?[\-+]?\d*?)[\s]+([\-+]?\d+\.?\d*e?[\-+]?\d*?)/g,
        );

        if (!vertex_result || vertex_result.length !== 3) continue;

        var face_vertex_normals = [];
        for (var j = 0; j < vertex_result.length; j++) {
          var vertex_str = vertex_result[j].replace("vertex", "").trim();
          var vertex_arr = vertex_str.split(" ");
          var x = parseFloat(vertex_arr[0]);
          var y = parseFloat(vertex_arr[1]);
          var z = parseFloat(vertex_arr[2]);
          geometry.vertices.push(new THREE.Vector3(x, y, z));

          if (normal_result && normal_result.length === 1) {
            var normal_str = normal_result[0].replace("normal", "").trim();
            var normal_arr = normal_str.split(" ");
            var nx = parseFloat(normal_arr[0]);
            var ny = parseFloat(normal_arr[1]);
            var nz = parseFloat(normal_arr[2]);
            face_vertex_normals.push(new THREE.Vector3(nx, ny, nz));
          }
        }

        var vertex_count = geometry.vertices.length;
        var face = new THREE.Face3(
          vertex_count - 3,
          vertex_count - 2,
          vertex_count - 1,
        );
        if (face_vertex_normals.length === 3) {
          face.vertexNormals = face_vertex_normals;
        }
        geometry.faces.push(face);
      }

      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      return geometry;
    }

    function parseBinary() {
      var geometry = new THREE.Geometry();
      var reader = new DataView(data);
      var faces = reader.getUint32(80, true);

      var r,
        g,
        b,
        hasColors = false,
        colors;
      var defaultR, defaultG, defaultB, alpha;

      for (var index = 0; index < 80 - 10; index++) {
        if (
          reader.getUint32(index, false) == 0x434f4c4f /*COLO*/ &&
          reader.getUint8(index + 4) == 0x52 /*'R'*/ &&
          reader.getUint8(index + 5) == 0x3d /*'='*/
        ) {
          hasColors = true;
          colors = [];
          defaultR = reader.getUint8(index + 6) / 255;
          defaultG = reader.getUint8(index + 7) / 255;
          defaultB = reader.getUint8(index + 8) / 255;
          alpha = reader.getUint8(index + 9) / 255;
        }
      }

      var dataOffset = 84;
      var faceLength = 12 * 4 + 2;

      for (var face = 0; face < faces; face++) {
        var start = dataOffset + face * faceLength;
        var normalX = reader.getFloat32(start, true);
        var normalY = reader.getFloat32(start + 4, true);
        var normalZ = reader.getFloat32(start + 8, true);

        if (hasColors) {
          var packedColor = reader.getUint16(start + 48, true);
          if ((packedColor & 0x8000) === 0) {
            r = (packedColor & 0x1f) / 31;
            g = ((packedColor >> 5) & 0x1f) / 31;
            b = ((packedColor >> 10) & 0x1f) / 31;
          } else {
            r = defaultR;
            g = defaultG;
            b = defaultB;
          }
        }

        for (var i = 1; i <= 3; i++) {
          var vertexstart = start + i * 12;
          var x = reader.getFloat32(vertexstart, true);
          var y = reader.getFloat32(vertexstart + 4, true);
          var z = reader.getFloat32(vertexstart + 8, true);
          geometry.vertices.push(new THREE.Vector3(x, y, z));
        }

        var vertex_count = geometry.vertices.length;
        var face_obj = new THREE.Face3(
          vertex_count - 3,
          vertex_count - 2,
          vertex_count - 1,
        );
        face_obj.normal = new THREE.Vector3(normalX, normalY, normalZ);
        geometry.faces.push(face_obj);

        if (hasColors) {
          colors.push(r, g, b);
          colors.push(r, g, b);
          colors.push(r, g, b);
        }
      }

      if (hasColors) {
        geometry.colors = colors;
      }

      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      return geometry;
    }
  },
};
