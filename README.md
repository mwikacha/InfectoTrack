# 🦠 OneHealth Hub 

[![Live Demo](https://img.shields.io/badge/Live_Demo-infectotrack.web.app-brightgreen?style=for-the-badge)](https://infectotrack.web.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/mwikacha/InfectoTrack.git)

## 1) Repository Overview + Team Introduction

Welcome to the official repository for **OneHealth Hub**, developed for the KitaHack competition. This repository contains the frontend and backend codebase for our public health awareness and assistance web application.

### 👥 Meet the Team
* **Dhanya Gotami K.D / dhanyadon19** - Backend Developer
* **Arisha Binti Mohamad / mwikacha** - Frontend Developer
* **Aliyah Tan Binti Faisal / 25006833-2025** - Frontend Developer / Data Researcher
* **Jayden Wan Kar Ming / Starchaser418171514** - Backend Developer / Data Researcher

---

## 2) Project Overview

### 🚨 Problem Statement
Public health is often approached in isolation, treating human illness without addressing its root causes. However, human health, animal health, and our shared environment are part of a deeply interconnected system. With over 75% of emerging infectious diseases originating in animals, a reactive, human-only approach is insufficient. Furthermore, the public lacks centralized platforms that connect how live environmental factors—like heavy rainfall or poor air quality—directly accelerate the spread of zoonotic diseases. 

### 🌍 SDG Alignment
**SDG 3: Good Health and Well-being.** OneHealth Hub directly supports this goal by shifting the focus from reactive treatment to proactive disease mitigation. By tracking animal health and environmental indicators, we aim to establish early warning systems for global public health safety.

### 💡 Short Description of the Solution
OneHealth Hub is a comprehensive web dashboard built on the "One Health" collaborative approach. The platform monitors three core sectors: Animal, Environment, and Human health. It empowers users by providing localized data on zoonotic diseases (illnesses that spread between animals and humans), tracking live environmental risk indicators, and utilizing an AI-powered "Intelligence Core" to identify potential risks before outbreaks occur.

---

## 3) Key Features

* **Intelligence Core (AI Sentinel):** An integrated, Gemini-powered chat assistant—the "One Health Sentinel"—designed to help users query the database and identify interconnected health risks. *(Includes educational disclaimer)*.
* **Live Environmental Risk Indicators (Under Development):** A planned feature for real-time environmental surveillance that will track local Weather Forecasts, Air Quality Index (AQI), and Water Turbidity. Once fully implemented, the platform will analyze this data to show public health impacts, such as how heavy rainfall accelerates vector transmission rates for diseases like Dengue.
* **Three-Pillar Core Sectors:** Dedicated, easily navigable dashboards for Animal Health (wildlife & livestock surveillance), Environmental Health (climate & water monitoring), and Human Health (disease trends and public safety).
* **Localized Zoonotic Disease Tracking:** Comprehensive information on significant public health threats, specifically tailored to regional risks like the Top 5 Zoonotic Diseases in Malaysia (e.g., Leptospirosis and Monkey Malaria). This includes data on vectors, transmission methods, symptoms, and preventative measures..
* **Animal Health Impact Analysis:** Educational modules explaining the biological buffer animals provide, highlighting how healthy livestock ensures food security, prevents the spread of diseases, and provides vital nutrition.

---

## 4) Overview of Technologies Used

### 🔵 Google Technologies
* **Google Gemini API (Google AI Studio):** Powers our "Intelligence Core" and the "One Health Sentinel". We utilize Gemini's advanced natural language processing to intake queries about environmental, animal, and human health, allowing the AI to identify interconnected risks and summarize complex zoonotic data.
* **Firebase Hosting:** Used for fast, secure, and reliable deployment of our web application (`infectotrack.web.app`).

### 🛠️ Other Supporting Tools / Libraries
* **Frontend Framework:** React.js / HTML & JS / Vite
* **Styling:** Tailwind CSS
* **Version Control:** Git & GitHub
* **Package Manager:** npm

---

## 5) Implementation Details & Innovation

### 🏗️ System Architecture
The application follows a modern decoupled architecture:
1.  **Client Layer:** A responsive frontend built to handle user interactions smoothly.
2.  **Service Layer:** API calls are made directly to the Gemini API to power the Intelligence Core.
3.  **Hosting Layer:** The entire compiled application is served globally via Firebase Hosting.

### 🔄 Workflow
1.  **Holistic Discovery:** The user accesses the Hub Dashboard and selects a core sector to monitor (e.g., Human Health for disease trends, or Environment for climate monitoring).
2.  **Risk Analysis:** The user reviews localized data, such as the Top 5 Zoonotic Diseases in Malaysia (like Leptospirosis or Monkey Malaria), examining vectors, spread methods, and prevention.
3.  **AI Intelligence Synthesis:** Instead of just reading static data, the user queries the "One Health Sentinel". The Gemini-powered AI synthesizes how current environmental factors (like post-flood water turbidity) might impact animal habitats and subsequently increase human zoonotic risks.

---

## 6) Challenges Faced

* **Pivoting from Reactive to Proactive:** Halfway through development, we realized that simply relying on an AI chatbot wasn't enough. We wanted to provide a truly preventative tool, which led us to design the Live Environmental Risk Indicators. By implementing this, users can monitor real-time environmental data—like weather forecasts, Air Quality Index (AQI), and water turbidity, allowing them to proactively see how environmental shifts, such as heavy rainfall, directly accelerate vector transmission rates for diseases like Dengue.
* **Time Constraints:** Building a seamless UI while concurrently integrating multiple external APIs within the time limit required strict task delegation.
*(Feel free to add any specific bugs or hurdles your team encountered here!)*

---

## 7) Installation & Setup

To run OneHealth Hub locally, follow these steps:

**Prerequisites:**
* Node.js installed
* Google Gemini API Key

**Steps:**
## 🚀 Installation & Setup 

### Step 1: Clone the Repository
```bash
git clone https://github.com/mwikacha/OneHealthHub.git
cd yourfoldername
```

### Step 2: Clean Install (Force Fresh Dependencies)
```bash
# Remove old dependencies
rm -r node_modules package-lock.json

# *Note: If you are on Windows PowerShell and face an error with the 'rm' command, use this instead:
# Remove-Item -Recurse -Force node_modules
# Remove-Item -Force package-lock.json

# Force reinstall all packages with latest versions
npm install -f
```

### Step 3: Set Up Gemini AI API Key
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local and add your Gemini API key
# Get a free API key from: https://ai.google.dev/
```
Then open `.env.local` and replace `your_api_key_here` with your actual API key:
```
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

### Step 4: Install Development Dependencies
```bash
# Install Vite and React plugins
npm install -D vite @vitejs/plugin-react -f

# Install Tailwind CSS v4 with PostCSS
npm install -D @tailwindcss/postcss tailwindcss postcss autoprefixer -f

# Install UI library
npm install lucide-react -f
```

### Step 5: Verify Installation
```bash
npm list
```
You should see:
- `react` and `react-dom`
- `vite`
- `tailwindcss` and `@tailwindcss/postcss`
- `lucide-react`

## ▶️ Running the Project

### Start Development Server
```bash
npm run dev
```

The app will be available at: **http://localhost:5174/** (or the next available port)

## 8) 🗺️ Future Roadmap

While **OneHealth Hub** currently serves as a strong MVP for the KitaHack competition, our vision for a holistic health platform extends much further. Here is what we plan to build next:

* **📡 Full Live API Integration:** Transition our *Live Environmental Risk Indicators* from a UI concept to fully functional, real-time data feeds by integrating third-party APIs for local Weather, AQI, and Water Turbidity.
* **🔮 Predictive Outbreak Modeling:** Enhance the "One Health Sentinel" AI to actively monitor intersecting data (e.g., heavy rainfall + high water turbidity) and send automated early-warning alerts for potential zoonotic outbreaks like Dengue or Leptospirosis.
* **📍 Vaccination & Care Locator:** Integrate location-based services (such as the Google Maps API) to help users instantly locate nearby vaccination centers, veterinary clinics, and hospitals to encourage proactive preventative care for both humans and pets.
* **🤝 Community Crowdsourcing:** Develop a reporting module that allows local farmers, hikers, and citizens to report unusual animal deaths or environmental hazards (like illegal dumping), feeding grassroots data directly into the Intelligence Core.







