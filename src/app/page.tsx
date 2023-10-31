import React, { FC } from 'react';
import CardComponent from '@/components/Card';
import NavMenu from '@/components/NavigationMenu';
import Navbar from '@/components/Navbar';

const Home: FC = () => (
  <>
    <Navbar />
    <div className='flex items-center justify-center'>
      <NavMenu />
    </div>
    <div className='m-8 flex items-center justify-center'>
      <div>
        <CardComponent
          alt='nigger 1'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhSkGGhLYUT2xuCTNT-NmS4_mdzCe-Pki1U7V5oE&s'
          title='Chapter 1'
          desc='i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger i am a nigger'
          name='Niggers'
        />
        <CardComponent
          alt='nigger '
          src='https://static.wikia.nocookie.net/ksi/images/b/b8/Baldski.png/revision/latest?cb=20201223000429'
          title='Chapter 2'
          desc='i am also a nigger oakweOAKWeowake'
          name='History of Niggers'
        />
        <CardComponent
          alt='nigger '
          src='https://cdn.britannica.com/41/147441-050-AF8ACAF8/captives-African-ships-Slave-Coast-slave-trade-1880.jpg'
          title='Chapter 3'
          desc='well i guess that happened. explains why there are a lot of niggers here in the west :skull:'
          name='The Atlantic Slave Trade'
        />
      </div>
    </div>
  </>
);

export default Home;
