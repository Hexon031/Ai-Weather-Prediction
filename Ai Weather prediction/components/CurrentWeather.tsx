
import React from 'react';
import type { CurrentWeather as CurrentWeatherType, Location } from '../types';
import WeatherIcon from './WeatherIcon';

interface CurrentWeatherProps {
  data: CurrentWeatherType;
  location: Location;
}

const InfoPill: React.FC<{ label: string, value: string | number }> = ({ label, value }) => (
    <div className="text-center">
        <div className="text-sm text-slate-400">{label}</div>
        <div className="font-semibold text-lg">{value}</div>
    </div>
);

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data, location }) => {
  return (
    <section 
        className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700 animate-slide-in"
        style={{ animationDelay: '100ms' }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Left Side: Location & Main Temp */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 text-sky-400">
            <WeatherIcon condition={data.condition} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{location.city}</h2>
            <p className="text-slate-400">{location.country}</p>
            <p className="text-lg font-medium mt-1">{data.condition}</p>
          </div>
        </div>
        
        {/* Right Side: Temperature Details */}
        <div className="text-center sm:text-right">
            <p className="text-6xl font-extrabold tracking-tighter">{Math.round(data.temperature_c)}°C</p>
            <p className="text-slate-400">Feels like {Math.round(data.feels_like_c)}°C</p>
        </div>
      </div>
      
      {/* Bottom Details */}
      <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <InfoPill label="Humidity" value={`${data.humidity}%`} />
        <InfoPill label="Wind (KPH)" value={data.wind_kph.toFixed(1)} />
        <InfoPill label="Temp (F)" value={`${Math.round(data.temperature_f)}°F`} />
        <InfoPill label="Wind (MPH)" value={data.wind_mph.toFixed(1)} />
      </div>
    </section>
  );
};

export default CurrentWeather;
