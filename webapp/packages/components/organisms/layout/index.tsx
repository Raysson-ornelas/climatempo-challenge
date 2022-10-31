import { ReactNode } from 'react';

import { Container } from '../../atoms/container';
import { Navbar } from '../../molecules/navBar';
import { SearchBar } from '../../molecules/searchBar';

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <SearchBar />
      <div className='bg-gray-200 min-h-screen'>
        <Container>{children}</Container>
      </div>
    </>
  );
}
