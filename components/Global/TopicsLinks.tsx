import Link from 'next/link';
import React from 'react';

export default function TopicsLinks() {
  return (
    <ul className='flex flex-col px-3 divide-y'>
      <li className='block p-4'>
        <Link href='/tag/data'>Data</Link>
      </li>
      <li className='block p-4'>
        <Link href='/tag/business'>Business</Link>
      </li>
      <li className='block p-4'>
        <Link href='/tag/technology'>Technology</Link>
      </li>
      <li className='block p-4'>
        <Link href='/tag/marketing'>Marketing</Link>
      </li>
      <li className='block p-4'>
        <Link href='/tag/thoughts'>Thoughts</Link>
      </li>
      <li className='block p-4'>
        <Link href='/tag/programming'>Programming</Link>
      </li>
      <li className='block p-4'>
        <Link href='/tags'>All Topics</Link>
      </li>
    </ul>
  );
}
