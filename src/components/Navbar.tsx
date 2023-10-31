import Image from 'next/image';

const NavrbarComponenets = ['Home', 'Racism', 'Homophobia', 'About us!'];

const Navbar = () => (
  <div className='flex w-full h-[5em] bg-black border-b-2 items-center px-10'>
    <div>
      <Image
        src='https://avatars.akamai.steamstatic.com/edc53a167038ca1cca5554a127dfad8665372640_full.jpg'
        alt='ph kids lol'
        width={50}
        height={50}
      />
    </div>
    <div className='flex items-center h-[75%] mx-5 pr-16 border-r-2'>
      <p className='font-extrabold'>Porn Hub Kids!</p>
    </div>
    <div className='flex items-center h-[75%]'>
      {NavrbarComponenets.map((component) => (
        <p className='mx-5 font-semibold'>{component}</p>
      ))}
    </div>
  </div>
);

export default Navbar;
