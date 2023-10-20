import Link from 'next/link';
import Image from 'next/image';

export default function Header(): JSX.Element {
  return (
    <header>
      <nav className='flex items-center justify-between border-gray-200 bg-primaryDarker px-4 py-2 lg:px-16'>
        <figure className='flex items-center'>
          <Image src='/logo-2.png' alt='Logo' width={40} height={40} />
          <figcaption className='ml-3 whitespace-nowrap text-xl font-semibold text-white'>
            Scrum Board
          </figcaption>
        </figure>
        <ul className='hidden font-medium lg:flex lg:space-x-8'>
          <li className='bg-accent p-3 text-white hover:text-gray-50'>
            <Link href='#'>Home</Link>
          </li>
          <li className='bg-accent p-3 text-white hover:text-gray-50'>
            <Link href='#'>Company</Link>
          </li>
          <li className='bg-accent p-3 text-white hover:text-gray-50'>
            <Link href='#'>Marketplace</Link>
          </li>
          <li className='bg-accent p-3 text-white hover:text-gray-50'>
            <Link href='#'>Features</Link>
          </li>
          <li className='bg-accent p-3 text-white hover:text-gray-50'>
            <Link href='#'>Team</Link>
          </li>
          <li className='bg-accent p-3 text-white hover:text-gray-50'>
            <Link href='#'>Contact</Link>
          </li>
        </ul>
        <ul className='flex items-center'>
          <li className='mr-2 rounded-full bg-gradient-to-r from-warning to-success px-4 py-2 text-sm font-bold text-white hover:bg-gray-400'>
            <Link href='/login'>Log in</Link>
          </li>
          <li className='rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-bold text-white'>
            <Link href='/signup'>Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
