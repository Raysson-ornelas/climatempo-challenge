import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function ForecastItem({ children }: Props) {
  return <div className='flex items-center gap-10 sm:gap-6'>{children}</div>;
}
