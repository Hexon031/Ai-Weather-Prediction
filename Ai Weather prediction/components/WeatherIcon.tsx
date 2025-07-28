import React from 'react';
import { WEATHER_ICONS } from '../constants';

interface WeatherIconProps {
  condition: string;
  className?: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, className = "w-full h-full" }) => {
  const normalizedCondition = condition.toLowerCase().trim();
  
  // Find a matching key in WEATHER_ICONS
  const iconKey = Object.keys(WEATHER_ICONS).find(key => normalizedCondition.includes(key));
  
  const IconComponent = iconKey ? WEATHER_ICONS[iconKey] : WEATHER_ICONS['default'];

  // Render the component directly with the className prop
  return <IconComponent className={className} />;
};

export default WeatherIcon;
