import Magnifier from '../../atoms/icons/Magnifier';

interface Props {}

export function SearchInput(props: Props) {
  const {} = props;

  return (
    <div className='relative max-w-2xl'>
      <input
        type='email'
        id='UserEmail'
        placeholder='Search'
        className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-2'
      />

      <span className='absolute inset-y-0 right-0 p-1 grid place-content-center text-black'>
        <Magnifier />
      </span>
    </div>
  );
}
