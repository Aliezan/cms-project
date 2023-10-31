import React, { FC } from 'react';
import CardComponent from '@/components/Card';
import NavbarTop from '@/components/Navbar';

const Home: FC = () => (
  <>
    <div className='flex items-center justify-center'>
      <NavbarTop />
    </div>
    <div className='m-8 flex items-center justify-center'>
      <div>
        <CardComponent
          alt='nigger 1'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhSkGGhLYUT2xuCTNT-NmS4_mdzCe-Pki1U7V5oE&s'
          title='Chapter 1'
          desc='i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger'
          name='Niggers 1'
        />
        <CardComponent
          alt='nigger '
          src='https://static.wikia.nocookie.net/ksi/images/b/b8/Baldski.png/revision/latest?cb=20201223000429'
          title='Chapter 2'
          desc='i am also a nigger oakweOAKWeowake'
          name='Niggers 2'
        />
      </div>
    </div>
  </>
);

export default Home;
