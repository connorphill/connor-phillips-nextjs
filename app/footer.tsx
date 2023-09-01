import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className='container mx-auto'>
      <div className='flex justify-center'>
        <ul className='flex flex-row space-x-10'>
          <li>Connor Phillips</li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
