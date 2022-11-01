import { Rain, Temperature } from '../../../context/weather';
import ArrowDown from '../../atoms/icons/ArrowDown';
import ArrowUp from '../../atoms/icons/ArrowUp';
import Droplet from '../../atoms/icons/Droplet';
import Umbrella from '../../atoms/icons/Umbrella';
import { Text } from '../../atoms/text';
import { ForecastItem } from '../../molecules/forecastItem';
import { ForecastLine } from '../../molecules/forecastLine';

interface Props {
  temperature: Temperature;
  rain: Rain;
}

export function ForecastBody({ temperature, rain }: Props) {
  return (
    <div className='p-4 grid gap-6 bg-gray-100'>
      <ForecastLine>
        <ForecastItem>
          <ArrowUp />
          <Text label={`${temperature.max}°C`} variant='up' />
        </ForecastItem>
        <ForecastItem>
          <ArrowDown />
          <Text label={`${temperature.min}°C`} variant='down' />
        </ForecastItem>
      </ForecastLine>

      <ForecastLine>
        <ForecastItem>
          <Droplet />
          <Text label={`${rain.precipitation}mm`} variant='default' />
        </ForecastItem>
        <ForecastItem>
          <Umbrella />
          <Text label={`${rain.probability}%`} variant='default' />
        </ForecastItem>
      </ForecastLine>
    </div>
  );
}
