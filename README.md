# AI Emergency Pressure & Ambulance Load Prediction System

Backend service for real-time hospital emergency pressure and ambulance load prediction.  
Built with **Node.js**, **Express**, **Sequelize ORM**, and **PostgreSQL**.

---

## 🚑 Project Overview
This system models hospital and ambulance data to predict emergency load and pressure.  
It is part of **Phase 1** of an internship project, focusing on backend setup, database integration, and API endpoints.

---

## 🛠 Tech Stack
- **Node.js** (runtime)
- **Express.js** (web framework)
- **Sequelize** (ORM for PostgreSQL)
- **PostgreSQL** (database)
- **Jest + Supertest** (testing framework, planned)

---The project was developed in **three phases**:
- **Phase 1:** Backend setup, database integration, and basic API endpoints.
- **Phase 2:** Accident prediction, hotspot detection, alerts, database seeding, testing, and dashboard visualization.
- **Phase 3:** Final polish with security audit, UX improvements, documentation, and deployment readiness.

## Project Structure
ai-emergency-system/ ├── config/          # Database configuration ├── controllers/     # Business logic (predictController.js) ├── models/          # Sequelize models (Hospital.js, Ambulance.js) ├── routes/          # API routes (predictRoutes.js) ├── services/        # Helper services (prediction, geo, alerts) ├── seed/            # Database seeding scripts ├── tests/           # Automated tests ├── index.js         # Entry point ├── dashboard.html   # Hotspot visualization └── README.md        # Documentation


---

## Endpoints
- `GET /api/predict/:hospitalId` → Dummy hospital load prediction  
- `GET /api/prediction` → Accident prediction (dummy logic, extendable to ML)  
- `GET /api/hotspots` → Accident hotspots (dummy clustering, extendable to geospatial)  
- `GET /api/alerts` → Hospital + ambulance alerts (pending bug fix for ambulance load check)  

---

## Setup Instructions
1. **Install dependencies**
   ```bash
   npm install

   - Configure environment variables
Create a .env file:
DB_NAME=emergency_system
DB_USER=root
DB_PASS=password
DB_HOST=localhost
- Seed database
node seed/hospitalSeed.js
node seed/ambulanceSeed.js
- Run server
npm start
- Run tests
npm test


- View dashboard
Open dashboard.html in browser to see accident hotspots visualization.

Phase 1: Backend Setup
- Configured Node.js + Express server.
- Integrated Sequelize ORM with PostgreSQL.
- Created models for Hospital and Ambulance.
- Implemented basic dummy prediction endpoint.

Phase 2: Core Functionality
- Added accident prediction service (predictAccidentLoad).
- Implemented geospatial hotspot detection (geoService).
- Built alerts service (alertService) for hospital/ambulance overload.
- Seeded database with sample hospitals and ambulances.
- Wrote automated tests with Jest + Supertest.
- Created dashboard visualization with Chart.js.

Phase 3: Final Polish
- Security Audit:
- Input validation for hospital IDs.
- Sanitized error messages (no stack traces exposed).
- Environment variables for DB credentials.
- UX Improvements:
- Loading states in dashboard.
- Clear error messages for invalid inputs.
- Consistent JSON response format {status, data} or {status, message}.
- Documentation:
- Complete README with all phases.
- Final report of design decisions.
- Deployment Readiness:
- Added npm start and npm test scripts.
- Dockerfile prepared for containerization.
- Ready for hosting on Heroku/AWS/Docker.

Known Issues
- /api/alerts endpoint bug: checkAmbulanceLoad not exported correctly.
- Fix planned in next iteration.

Future Work
- Integrate ML models for accident prediction.
- Implement real geospatial clustering (e.g., k-means).
- Connect dashboard to live API data.
- Enhance UI/UX with Leaflet.js maps.




