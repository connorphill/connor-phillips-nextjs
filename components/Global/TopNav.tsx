'use client';
import React, { useState } from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher';
import TopicsNav from './TopicsNav';
import Link from 'next/link';

export default function TopNav() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className=''>
      <div className='container relative mx-auto flex items-center justify-between py-4'>
        {/* Logo */}
        <div className='flex'>
          <h1 className='text-5xl'>
            <a href='/'>Connor Phillips</a>
          </h1>
        </div>
        {/* Primary Nav */}
        <div className='hidden lg:flex ml-20'>
          <ul className='flex flex-row space-x-10'>
            <TopicsNav />
            <li className='flex flex-row'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
                />
              </svg>

              <p className='ml-2'>
                <Link href='/portfolio'>Portfolio</Link>
              </p>
            </li>
            <li className='flex flex-row'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                />
              </svg>
              <p className='ml-2'>
                <Link href='/about'>About</Link>
              </p>
            </li>
          </ul>
        </div>
        {/* Theme Switcher */}
        <div className='hidden lg:flex justify-end'>
          <ThemeSwitcher />
        </div>
        {/* Mobile Button */}
        <div className='lg:hidden flex items-center'>
          <button
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          mobileMenu
            ? 'flex lg:hidden divide-y origin-top animate-open-mobile-menu transition'
            : 'hidden'
        }`}
        id='mobile-menu'
      >
        <ul>
          <li className='block p-4'>
            <a href=''>Link #1</a>
          </li>
          <li className='block p-4'>
            <a href=''>Link #1</a>
          </li>
          <li className='block p-4'>
            <a href=''>Link #1</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}