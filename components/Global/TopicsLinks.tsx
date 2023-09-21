import Link from 'next/link';
import React from 'react';

interface LinkProps {
  setTopicsMenu: () => void;
}

export default function TopicsLinks({ setTopicsMenu }: LinkProps) {
  return (
    <ul className='flex flex-col px-3 divide-y'>
      <li className='block p-4'>
        <Link href='/tag/data' onClick={() => { setTopicsMenu(); }}>Data</Link>
      </li>
      <li className='block p-4'>
        <Link href='/tag/business' onClick={() => { setTopicsMenu(); }}>Business</Link>
      </li>
      <li className='block p-4'>
        <Link href='/tag/technology' onClick={() => { setTopicsMenu(); }}>Technology</Link>
      </li>
      <li className='block p-4'>
        <Link href='/tag/marketing' onClick={() => { setTopicsMenu(); }}>Marketing</Link>
      </li>
      <li className='block p-4'>
        <Link href='/tag/thoughts' onClick={() => { setTopicsMenu(); }}>Thoughts</Link>
      </li>
      <li className='block p-4'>
        <Link href='/tag/programming' onClick={() => { setTopicsMenu(); }}>Programming</Link>
      </li>
      <li className='block p-4'>
        <Link href='/tags' onClick={() => { setTopicsMenu(); }}>All Topics</Link>
      </li>
    </ul>
  );
}
