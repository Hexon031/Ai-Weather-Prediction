import React from 'react';

const SunIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);

const CloudIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-5.78-1.028.533.533 0 0 0-.323.572M2.25 15a4.5 4.5 0 0 1 4.5-4.5H7.5" />
  </svg>
);

const RainIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 16.5l-1.5 1.5m3-3l-1.5 1.5m3-3l-1.5 1.5m3-3l-1.5 1.5" />
    </svg>
);


const SnowIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 4.5 4.5 4.5m-4.5-4.5v15m-4.5-4.5L11.25 9m-4.5 4.5h15m-15 0-4.5-4.5m4.5 4.5L2.25 9m9 13.5-4.5-4.5m4.5 4.5v-15m4.5 15 4.5-4.5m-4.5 4.5v-15m0 15 4.5-4.5M11.25 9l4.5-4.5" />
  </svg>
);

const StormIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-5.78-1.028.533.533 0 0 0-.323.572M2.25 15a4.5 4.5 0 0 1 4.5-4.5H7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 16.5-3-3 4.5-4.5-3-3" />
  </svg>
);

const FogIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-5.78-1.028.533.533 0 0 0-.323.572M2.25 15a4.5 4.5 0 0 1 4.5-4.5H7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 18.75h16.5M3.75 21h16.5" />
  </svg>
);

export const WEATHER_ICONS: { [key: string]: React.FC<{ className?: string }> } = {
    'sunny': SunIcon,
    'clear': SunIcon,
    'partly cloudy': CloudIcon,
    'cloudy': CloudIcon,
    'overcast': CloudIcon,
    'mist': FogIcon,
    'fog': FogIcon,
    'patchy rain possible': RainIcon,
    'light rain': RainIcon,
    'moderate rain': RainIcon,
    'heavy rain': RainIcon,
    'rain': RainIcon,
    'showers': RainIcon,
    'patchy snow possible': SnowIcon,
    'light snow': SnowIcon,
    'moderate snow': SnowIcon,
    'heavy snow': SnowIcon,
    'snow': SnowIcon,
    'blizzard': SnowIcon,
    'thundery outbreaks possible': StormIcon,
    'thunderstorm': StormIcon,
    'storm': StormIcon,
    'default': CloudIcon
};