import { ForecastBody } from '../forecastBody';
import { ForecastHeader } from '../forecastHeader';

export function Card() {
  return (
    <div className='overflow-hidden shadow-lg'>
      <ForecastHeader />
      <ForecastBody />
    </div>
  );
}
