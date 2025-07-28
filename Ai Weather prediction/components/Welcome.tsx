
import React from 'react';

const Welcome: React.FC = () => {
    return (
        <div className="text-center py-16 px-4 bg-slate-800/30 rounded-lg border border-slate-700 animate-subtle-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            <h2 className="mt-6 text-2xl font-semibold text-white">Welcome to the Future of Weather</h2>
            <p className="mt-2 text-slate-400">
                Enter a city above to get a real-time, AI-powered weather forecast.
            </p>
        </div>
    );
};

export default Welcome;
