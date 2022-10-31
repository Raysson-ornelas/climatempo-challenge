import { useContext } from 'react';

import { AppCtx } from '../../../context/ForecastContext';
import Magnifier from '../../atoms/icons/Magnifier';

export function SearchInput() {
  const { search } = useContext(AppCtx);

  return (
    <div className='relative max-w-2xl'>
      <input
        type='email'
        id='UserEmail'
        placeholder='Search'
        className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-2'
        onChange={(event) => search(event.target.value)}
      />

      <span className='absolute inset-y-0 right-0 p-1 grid place-content-center text-black'>
        <Magnifier />
      </span>
    </div>
  );
}
