
# AI Weather Predictor

An intelligent weather forecasting web application that uses the Google Gemini API to provide current weather conditions and a 5-day forecast for any city in the world. It features a clean, responsive, and modern UI built with React and Tailwind CSS.

![AI Weather Predictor Screenshot](https://storage.googleapis.com/pr-prd-filestore-f29/a09a585121024340a6b7e012e128913b/20240523/3440733/508605/a09a585121024340a6b7e012e128913b_3440733_508605.png) 
*(Note: This is a representative image. Actual UI may vary slightly.)*

---

## ✨ Features

- **AI-Powered Forecasts**: Leverages Google's Gemini model to generate dynamic and detailed weather data.
- **Current Weather Details**: Displays a comprehensive view of the current conditions, including temperature, "feels like" temperature, humidity, and wind speed.
- **5-Day Forecast**: Plan ahead with a clear, concise forecast for the next five days.
- **Global Coverage**: Search for any city worldwide and receive its weather forecast.
- **Responsive Design**: The interface is fully responsive and optimized for desktops, tablets, and mobile devices.
- **Intuitive UI/UX**: Features a sleek, modern design with smooth animations, loading states, and clear error handling to provide an excellent user experience.

---

## 🛠️ Technology Stack

- **Frontend**: [React](https://react.dev/) (v19) with Hooks
- **AI Model**: [Google Gemini API](https://ai.google.dev/) (`@google/genai`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for a utility-first CSS framework.
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)
- **Module Loading**: ES Modules via `<script type="importmap">` in `index.html`.

---

## 🧠 How It Works

The application uses the `@google/genai` SDK to communicate with the `gemini-2.5-flash` model.

1.  A user enters a city name into the search bar.
2.  The `getWeatherPrediction` service in `services/geminiService.ts` constructs a detailed prompt asking for the weather.
3.  Crucially, the request includes a `responseSchema` that instructs the Gemini API to return the data in a specific, structured JSON format.
4.  This ensures a reliable and predictable data structure, which is then parsed and validated by the application.
5.  The React frontend receives this JSON data, updates its state, and renders the `CurrentWeather` and `Forecast` components with the AI-generated information.

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Prerequisites

- A modern web browser.
- A Google Gemini API key. You can get one from [Google AI Studio](https://makersuite.google.com/).

### 2. Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Set up Environment Variables:**
    This project expects the Google Gemini API key to be available as an environment variable. While in a real deployment this would be configured on the server, for local development you can simulate this.

    **Note:** The application code is designed to read `process.env.API_KEY` directly. How you set this variable depends on your local development server.

3.  **Serve the application:**
    Since this is a client-side application with no build step, you can serve the files with any simple local web server. One of the easiest ways is using `serve`.

    ```bash
    # If you don't have serve, install it globally
    npm install -g serve

    # Serve the project directory
    serve .
    ```

4.  Open your browser and navigate to the local server address provided by `serve` (usually `http://localhost:3000`).

---

## 📂 File Structure

The project is organized into a modular structure for clarity and maintainability.

```
.
├── components/               # Reusable React components
│   ├── CurrentWeather.tsx    # Displays the current weather card
│   ├── ErrorDisplay.tsx      # Renders API/user errors
│   ├── Forecast.tsx          # Displays the 5-day forecast
│   ├── LoadingSpinner.tsx    # A simple loading spinner
│   ├── SearchBar.tsx         # The main search input and button
│   └── Welcome.tsx           # Initial welcome message component
│   └── WeatherIcon.tsx       # Dynamically renders weather condition icons
├── services/                 # Handles external API calls
│   └── geminiService.ts      # Logic for fetching data from the Gemini API
├── App.tsx                   # Main application component, manages state
├── constants.tsx             # Application-wide constants (e.g., icon mappings)
├── index.html                # The main HTML entry point
├── index.tsx                 # Mounts the React application to the DOM
├── metadata.json             # Application metadata
├── README.md                 # This file
└── types.ts                  # TypeScript type definitions for weather data
```

---
