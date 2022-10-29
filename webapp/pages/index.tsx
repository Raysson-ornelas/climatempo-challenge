import Image from 'next/image';

import Logo from '../public/logo-white.png';
import { Container } from '../packages/components/atoms/container';
import { H1 } from '../packages/components/atoms/text';
import { SearchInput } from '../packages/components/molecules/input';
import { Card } from '../packages/components/organisms/card';

export default function Home() {
  return (
    <>
      <div className='bg-blue-500'>
        <Container>
          <div className='flex justify-center p-4'>
            <Image src={Logo} alt='Logo' width={200} height={20} />
          </div>
        </Container>
      </div>

      <div className='bg-white p-1 flex justify-center'>
        <Container>
          <SearchInput />
        </Container>
      </div>

      <div className='bg-gray-200 min-h-screen'>
        <Container>
          <div className='grid gap-4 pt-4'>
            <H1 label='Previsão para Osasco' />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              <Card />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
