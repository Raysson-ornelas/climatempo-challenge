import { useContext } from 'react';

import { H1 } from '../packages/components/atoms/text';
import { Card } from '../packages/components/organisms/card';
import { AppCtx } from '../packages/context/ForecastContext';

export default function Home() {
  const { weatherList } = useContext(AppCtx);
  return (
    <div className='grid gap-4 pt-4'>
      {weatherList.map((val) => {
        return (
          <div key={val.locale.id}>
            <H1 label={val.locale.name} />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              <Card weather={val.weather} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
