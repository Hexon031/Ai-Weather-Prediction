
import React, { useState, useCallback } from 'react';
import { getWeatherPrediction } from './services/geminiService';
import { WeatherData } from './types';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';
import Welcome from './components/Welcome';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = useCallback(async () => {
    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }
    setLoading(true);
    setError(null);
    setWeatherData(null);
    try {
      const data = await getWeatherPrediction(city);
      setWeatherData(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  }, [city]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white font-sans p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
            AI Weather Predictor
          </h1>
          <p className="text-slate-400 mt-2 text-lg">Your intelligent weather companion</p>
        </header>

        <main>
          <SearchBar
            city={city}
            setCity={setCity}
            onSearch={handleSearch}
            loading={loading}
          />

          <div className="mt-8">
            {loading && <LoadingSpinner />}
            {error && <ErrorDisplay message={error} />}
            
            {weatherData ? (
              <div className="space-y-8">
                <CurrentWeather data={weatherData.current} location={weatherData.location} />
                <Forecast data={weatherData.forecast} />
              </div>
            ) : (
               !loading && !error && <Welcome />
            )}
          </div>
        </main>
        
        <footer className="text-center mt-12 text-slate-500 text-sm">
            <p>Powered by Google Gemini. Weather data is AI-generated and may not be 100% accurate.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
