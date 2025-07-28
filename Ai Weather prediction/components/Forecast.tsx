
import React from 'react';
import type { ForecastDay } from '../types';
import WeatherIcon from './WeatherIcon';

interface ForecastProps {
  data: ForecastDay[];
}

const ForecastCard: React.FC<{ day: ForecastDay, index: number }> = ({ day, index }) => {
    return (
        <div 
            className="bg-slate-800/50 p-4 rounded-lg flex flex-col items-center gap-2 text-center border border-transparent hover:border-sky-500 transition-colors duration-300 animate-slide-in"
            style={{ animationDelay: `${200 + index * 100}ms`, opacity: 0 }}
        >
            <p className="font-bold text-lg">{day.day}</p>
            <div className="w-12 h-12 text-yellow-400">
                <WeatherIcon condition={day.condition} />
            </div>
            <p className="text-sm text-slate-400">{day.condition}</p>
            <div className="font-semibold">
                <span>{Math.round(day.high_c)}°</span>
                <span className="text-slate-400"> / {Math.round(day.low_c)}°</span>
            </div>
        </div>
    );
}

const Forecast: React.FC<ForecastProps> = ({ data }) => {
  return (
    <section>
        <h3 className="text-2xl font-bold mb-4 text-center sm:text-left animate-slide-in" style={{ animationDelay: '200ms', opacity: 0 }}>5-Day Forecast</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {data.map((day, index) => (
               <ForecastCard key={day.day + index} day={day} index={index} />
            ))}
        </div>
    </section>
  );
};

export default Forecast;
