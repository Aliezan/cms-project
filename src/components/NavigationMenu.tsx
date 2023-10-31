import React, { FC } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const NavMenu: FC = () => (
  <div>
    <div className='mt-5 w-[800px] bg-current rounded-md p-3 gap-10 grid grid-cols-4 items-center justify-evenly'>
      <Button asChild>
        <Link href='https://www.instagram.com/theywannabe.ian/'>niggers</Link>
      </Button>
      <Button>faggots</Button>
      <Button>retards</Button>
      <Button>paedophilia</Button>
    </div>
  </div>
);

export default NavMenu;
