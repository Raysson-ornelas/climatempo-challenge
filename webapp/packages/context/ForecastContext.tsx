import { createContext, ReactNode, useState } from 'react';

import WeatherData from '../utils/weather.json';
import LocaleData from '../utils/locales.json';

import { Weather, Locale } from './weather';

export interface ChildrenProps {
  readonly children: ReactNode;
}

interface IWeatherContext {
  weatherList: Weather[];
  localeList: Locale[];
  search: (text: string) => void;
}

export const AppCtx = createContext<IWeatherContext>({
  weatherList: WeatherData,
  localeList: LocaleData,
  search: () => {},
});

const ForecastContextProvider = ({ children }: ChildrenProps) => {
  const [weathers, setWeathers] = useState<Weather[]>(WeatherData);
  const weatherView = (searchTerm: string) => {
    return WeatherData.filter((val: Weather) => {
      if (searchTerm == '') {
        return [val];
      }

      if (val.locale.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return [val];
      }
    });
  };
  return (
    <AppCtx.Provider
      value={{
        weatherList: weathers,
        localeList: LocaleData,
        search: (text: string) => setWeathers(weatherView(text)),
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};
export { ForecastContextProvider };
