import { SmallText, Text } from '../../atoms/text';

interface Props {
  date: string;
  description: string;
}

export function ForecastHeader({ date, description }: Props) {
  return (
    <div className='bg-white pl-4 py-2 grid gap-1'>
      <Text label={date} variant='default' />
      <SmallText label={description} />
    </div>
  );
}
