import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function ForecastLine({ children }: Props) {
  return <div className='grid grid-cols-2'>{children}</div>;
}
