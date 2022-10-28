import ArrowDown from '../../atoms/icons/ArrowDown';
import ArrowUp from '../../atoms/icons/ArrowUp';
import Droplet from '../../atoms/icons/Droplet';
import Umbrella from '../../atoms/icons/Umbrella';
import { Text } from '../../atoms/text';
import { ForeCastItem } from '../../molecules/forecastItem';
import { ForecastLine } from '../../molecules/forecastLine';

export function ForecastBody() {
  return (
    <div className='p-4 grid gap-6 bg-gray-100'>
      <ForecastLine>
        <ForeCastItem>
          <ArrowUp />
          <Text label='' variant='up' />
        </ForeCastItem>
        <ForeCastItem>
          <ArrowDown />
          <Text label='' variant='down' />
        </ForeCastItem>
      </ForecastLine>

      <ForecastLine>
        <ForeCastItem>
          <Droplet />
          <Text label='' variant='default' />
        </ForeCastItem>
        <ForeCastItem>
          <Umbrella />
          <Text label='' variant='default' />
        </ForeCastItem>
      </ForecastLine>
    </div>
  );
}
