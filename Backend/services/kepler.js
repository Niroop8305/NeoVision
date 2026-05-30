export function meanToTrueAnomaly(M, e) {
  let E = M;
  const tolerance = 1e-6;
  let deltaE;
  do {
    deltaE = (M - (E - e * Math.sin(E))) / (1 - e * Math.cos(E));
    E += deltaE;
  } while (Math.abs(deltaE) > tolerance);
  return 2 * Math.atan2(Math.sqrt(1 + e) * Math.sin(E / 2), Math.sqrt(1 - e) * Math.cos(E / 2));
}

export function keplerToCartesianAtTime(orbitData, targetJD) {
  const { a, e, i, omega, M: M0, Omega, mean_motion, epoch } = orbitData;
  const rad = Math.PI / 180;
  const deltaT = targetJD - epoch;

  let M = M0 + mean_motion * deltaT;
  M = ((M % 360) + 360) % 360;

  const ν = meanToTrueAnomaly(M * rad, e);
  const r = a * (1 - e * e) / (1 + e * Math.cos(ν));

  const xOrb = r * Math.cos(ν);
  const yOrb = r * Math.sin(ν);

  const iRad = i * rad;
  const omegaRad = omega * rad;
  const OmegaRad = Omega * rad;

  const x = xOrb * (Math.cos(OmegaRad) * Math.cos(omegaRad) - Math.sin(OmegaRad) * Math.sin(omegaRad) * Math.cos(iRad)) -
            yOrb * (Math.cos(OmegaRad) * Math.sin(omegaRad) + Math.sin(OmegaRad) * Math.cos(omegaRad) * Math.cos(iRad));

  const y = xOrb * (Math.sin(OmegaRad) * Math.cos(omegaRad) + Math.cos(OmegaRad) * Math.sin(omegaRad) * Math.cos(iRad)) +
            yOrb * (Math.cos(OmegaRad) * Math.cos(omegaRad) * Math.cos(iRad) - Math.sin(OmegaRad) * Math.sin(omegaRad));

  const z = xOrb * Math.sin(omegaRad) * Math.sin(iRad) + yOrb * Math.cos(omegaRad) * Math.sin(iRad);

  return { x, y, z };
}

export function computeOrbitTrail(orbitData, daysPast = 100, steps = 200, nowJD) {
  const trail = [];
  for (let j = 0; j <= steps; j++) {
    const t = nowJD - (j * daysPast / steps);
    const pos = keplerToCartesianAtTime(orbitData, t);
    trail.push(pos);
  }
  return trail;
}
