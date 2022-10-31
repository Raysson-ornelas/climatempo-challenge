export interface Weather {
  period: Period;
  locale: Locale;
  weather: WeatherEntity[];
}
export interface Period {
  begin: string;
  end: string;
}
export interface Locale {
  id: number;
  name: string;
  state: string;
  latitude: number;
  longitude: number;
}
export interface WeatherEntity {
  date: string;
  text: string;
  temperature: Temperature;
  rain: Rain;
}
export interface Temperature {
  min: number;
  max: number;
}
export interface Rain {
  probability: number;
  precipitation: string | number;
}
