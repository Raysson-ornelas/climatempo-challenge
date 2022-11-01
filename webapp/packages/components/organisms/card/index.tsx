import { WeatherEntity } from '../../../context/weather';
import { ForecastBody } from '../forecastBody';
import { ForecastHeader } from '../forecastHeader';
interface Props {
  weather: WeatherEntity[];
}

export function Card({ weather }: Props) {
  return (
    <>
      {weather.map((val) => {
        return (
          <div className='overflow-hidden shadow-lg' key={Math.random()}>
            <ForecastHeader date={val.date} description={val.text} />
            <ForecastBody temperature={val.temperature} rain={val.rain} />
          </div>
        );
      })}
    </>
  );
}
