import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className='container mx-auto'>
      <div className='flex justify-center'>
        <ul className='flex flex-row space-x-10 py-5 font-normal text-primary-600 hover:text-midnight-800'>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li><Link href='/'><p className='text-xl' id="footer-logo">Connor Phillips</p></Link></li>
          <li>
            <Link href='/portfolio'>Portfolio</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
