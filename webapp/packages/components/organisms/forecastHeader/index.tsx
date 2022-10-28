import { SmallText, Text } from '../../atoms/text';

export function ForecastHeader() {
  return (
    <div className='bg-white pl-4 py-2 grid gap-1'>
      <Text label='01/02/2017' variant='default' />
      <SmallText label='Para isso vamos seguir alguns requisitos que usamos nos nossos proejtos:' />
    </div>
  );
}
