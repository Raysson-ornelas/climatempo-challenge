import Image from 'next/image';

import { Container } from '../../atoms/container';
import Logo from '../../../../public/logo-white.png';

export function Navbar() {
  return (
    <div className='bg-blue-500'>
      <Container>
        <div className='flex justify-center p-4'>
          <Image src={Logo} alt='Logo' width={200} height={20} />
        </div>
      </Container>
    </div>
  );
}
