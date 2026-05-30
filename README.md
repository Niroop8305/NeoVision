# 🌌 NeoVision - Near-Earth Object Visualization Platform

![NeoVision Banner](https://img.shields.io/badge/NeoVision-Asteroid%20Tracker-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/status-production%20ready-success?style=for-the-badge)

## 📖 Overview

**NeoVision** is a cutting-edge web application that visualizes Near-Earth Objects (NEOs) in stunning 3D, powered by real-time NASA data. Experience the cosmic dance of asteroids as they orbit our solar system with scientifically accurate orbital mechanics and interactive visualizations.

### ✨ Key Features

- 🛰️ **Real-Time NASA Data**: Fetches asteroid data from NASA's Near-Earth Object Web Service
- 🌍 **3D Visualization**: Interactive 3D rendering using Three.js and React Three Fiber
- 📊 **Orbital Mechanics**: Accurate Keplerian orbital calculations and trajectory predictions
- 🤖 **AI-Powered Insights**: Detailed asteroid analysis with natural language descriptions
- 📈 **Live Tracking**: Automated hourly updates of asteroid positions and data
- 🎨 **Stunning UI**: Modern, space-themed interface with particle effects and animations
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **High Performance**: Optimized rendering and efficient data processing

## 🏗️ Architecture

### Tech Stack

#### Frontend

- **React 19** - Modern UI framework
- **Vite** - Next-generation frontend tooling
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Typed.js** - Text typing animation

#### Backend

- **Node.js** - Runtime environment
- **Express 5** - Web application framework
- **MongoDB** - NoSQL database for data storage
- **Axios** - HTTP client for API requests
- **Validator** - Data validation library

#### APIs & Services

- **NASA NEO API** - Near-Earth Object data
- **Google Gemini AI** (optional) - AI-powered descriptions
- **OpenAI** (optional) - Alternative AI provider

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- MongoDB 6+ (local or cloud instance)
- NASA API Key (free from [NASA API Portal](https://api.nasa.gov/))
- Google Gemini API Key or OpenAI API Key (optional, for AI features)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/neovision.git
cd neovision
```

2. **Install Backend Dependencies**

```bash
cd Backend
npm install
```

3. **Install Frontend Dependencies**

```bash
cd ../Frontend
npm install
```

4. **Configure Environment Variables**

**Backend** - Create `Backend/.env`:

```env
# NASA API Configuration
NASA_API_KEY=your_nasa_api_key_here

# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017
DB_NAME=neovision
COLLECTION_NAME=asteroids

# Server Configuration
PORT=5000
NODE_ENV=development

# AI Service (Optional - choose one)
GEMINI_API_KEY=your_gemini_api_key_here
# OR
OPENAI_API_KEY=your_openai_api_key_here

# CORS Configuration
FRONTEND_URL=http://localhost:5173

# Fetch Configuration
FETCH_INTERVAL_HOURS=1
ASTEROID_LIMIT=5
```

**Frontend** - Create `Frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
VITE_ENV=development
```

5. **Start Development Servers**

**Backend** (in Backend directory):

```bash
npm run dev
```

**Frontend** (in Frontend directory):

```bash
npm run dev
```

6. **Access the Application**

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api
- Health Check: http://localhost:5000/health

## 📚 Detailed Documentation

### Features in Detail

#### 🌟 Asteroid Tracking

- Monitors Near-Earth Objects using NASA's comprehensive database
- Tracks position, velocity, and orbital parameters
- Identifies potentially hazardous asteroids
- Historical close approach data

#### 🎯 3D Visualization

- Real-time 3D rendering of asteroid positions
- Orbital trail visualization showing past trajectories
- Interactive camera controls (zoom, pan, rotate)
- Size-accurate representation based on diameter estimates

#### 📊 Data Processing

- Keplerian orbital element calculations
- Julian date conversions for astronomical accuracy
- Cartesian coordinate transformations
- Automated data refresh every hour

#### 🤖 AI Analysis

- Natural language descriptions of asteroid characteristics
- Size comparisons and interesting facts
- Hazard assessment and risk evaluation
- Discovery history and observation data

#### 📱 User Interface

- Modern space-themed design
- Animated particle effects and starfield
- Smooth transitions and hover effects
- Typed text animations for engagement
- Responsive layout for all devices

### API Endpoints

#### GET `/health`

Health check endpoint

```json
{
  "status": "healthy",
  "timestamp": "2026-01-24T10:30:00.000Z",
  "uptime": 3600,
  "environment": "production"
}
```

#### GET `/api/status`

Detailed system status

```json
{
  "status": "operational",
  "database": "connected",
  "lastDataFetch": "2026-01-24T10:00:00.000Z",
  "dataAgeMinutes": 30,
  "asteroidCount": 5,
  "timestamp": "2026-01-24T10:30:00.000Z"
}
```

#### GET `/api/asteroids`

Get all tracked asteroids with current positions

```json
{
  "asteroidData": [...],
  "fetchedAt": "2026-01-24T10:00:00.000Z"
}
```

#### GET `/api/asteroids/:id/details`

Get detailed information about a specific asteroid

```json
{
  "aiInfo": "🌌 **ASTEROID ANALYSIS**\n\n..."
}
```

## 🔧 Configuration

### Backend Configuration

All backend configuration is in `Backend/config/index.js`:

- `NASA_API_KEY`: Your NASA API key
- `MONGO_URI`: MongoDB connection string
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment (development/production)
- `FETCH_INTERVAL_HOURS`: How often to fetch new data
- `ASTEROID_LIMIT`: Number of asteroids to track

### Frontend Configuration

Environment variables in `Frontend/.env`:

- `VITE_API_URL`: Backend API URL
- `VITE_ENV`: Environment setting

## 🏭 Production Deployment

### Backend Deployment

1. **Set production environment variables**

```env
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
```

2. **Use a process manager**

```bash
npm install -g pm2
pm2 start server.js --name neovision-backend
```

3. **Use reverse proxy (nginx)**

```nginx
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Frontend Deployment

1. **Build the frontend**

```bash
cd Frontend
npm run build
```

2. **Deploy to hosting service**

- Vercel, Netlify, or AWS S3
- Set environment variables in hosting platform
- Configure build command: `npm run build`
- Configure output directory: `dist`

### Database

- Use MongoDB Atlas for managed cloud database
- Enable authentication and IP whitelisting
- Set up automated backups
- Monitor performance and usage

### Monitoring

- Use `/health` endpoint for uptime monitoring
- Use `/api/status` for detailed system checks
- Set up logging aggregation (e.g., LogDNA, Papertrail)
- Monitor API rate limits for NASA API

## 🧪 Development

### Project Structure

```
NeoVision/
├── Backend/
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Helper functions
│   └── server.js        # Entry point
├── Frontend/
│   ├── public/          # Static assets
│   │   ├── 2D_World/   # 2D visualization
│   │   └── 3D_World/   # 3D visualization
│   ├── src/
│   │   ├── assets/     # Images, fonts
│   │   ├── components/ # React components
│   │   ├── App.jsx     # Main component
│   │   └── main.jsx    # Entry point
│   └── package.json
└── README.md
```

### Running Tests

```bash
# Backend tests (when implemented)
cd Backend
npm test

# Frontend tests (when implemented)
cd Frontend
npm test
```

### Code Style

- ESLint for code linting
- Consistent formatting with Prettier (recommended)
- ES6+ modern JavaScript
- Async/await for asynchronous operations

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **NASA** - For providing the Near-Earth Object API
- **Three.js** - For the amazing 3D graphics library
- **React Three Fiber** - For making Three.js work seamlessly with React
- **MongoDB** - For the flexible database solution

## 📞 Support

For issues, questions, or contributions:

- Open an issue on GitHub
- Contact: your.email@example.com
- Documentation: [GitHub Wiki](https://github.com/yourusername/neovision/wiki)

## 🗺️ Roadmap

- [ ] User authentication and saved preferences
- [ ] Historical trajectory playback
- [ ] Comparison tools for multiple asteroids
- [ ] Export data as CSV/JSON
- [ ] Mobile native apps
- [ ] Real-time notifications for close approaches
- [ ] Integration with additional space APIs
- [ ] Machine learning predictions for asteroid behavior

---

**Made with ❤️ and ☕ by the NeoVision Team**

_Exploring the cosmos, one asteroid at a time._ 🚀🌌
