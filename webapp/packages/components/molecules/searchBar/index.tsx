import { Container } from '../../atoms/container';
import { SearchInput } from '../input';

export function SearchBar() {
  return (
    <div className='bg-white p-1 flex justify-center'>
      <Container>
        <SearchInput />
      </Container>
    </div>
  );
}
