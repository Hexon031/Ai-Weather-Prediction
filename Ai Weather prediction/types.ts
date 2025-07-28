
export interface CurrentWeather {
  temperature_c: number;
  temperature_f: number;
  condition: string;
  humidity: number;
  wind_kph: number;
  wind_mph: number;
  feels_like_c: number;
  feels_like_f: number;
}

export interface ForecastDay {
  day: string;
  high_c: number;
  high_f: number;
  low_c: number;
  low_f: number;
  condition: string;
}

export interface Location {
    city: string;
    country: string;
}

export interface WeatherData {
  location: Location;
  current: CurrentWeather;
  forecast: ForecastDay[];
}
