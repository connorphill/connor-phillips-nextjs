import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className='container mx-auto'>
      <div className='flex justify-center'>
        <ul className='max-w-60 text-primary-600 flex w-60 flex-row justify-evenly space-x-10 py-5 font-normal hover:text-midnight-800'>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/'>
              <p className='text-xl' id='footer-logo'>
                Connor Phillips
              </p>
            </Link>
          </li>
          <li>
            <Link href='/portfolio'>Portfolio</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
