'use client';
import React, { useState, useRef, useEffect } from 'react';
import TopNavLinks from './TopNavLinks';
import SocialLinks from './SocialLinks';

export default function TopNav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileClick, setMobileClick] = useState(false);

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
};

  const ref = useOutsideClick(() => {
    setMobileMenu(false);
  });

  return (
    <nav ref={ref}>
      <div className='container relative mx-auto flex items-center justify-between py-4'>
        {/* Logo */}
        <div className='flex flex-col md:flex-row'>
          <h2 className='text-3xl lg:text-5xl font-bold'>
            <a href='/'>Connor Phillips</a>
          </h2>
        </div>
        {/* Primary Nav */}
        <div className='hidden lg:flex ml-20'>
          <TopNavLinks setMobileMenu={setMobileMenu} />
        </div>
        {/* Primary Nav */}
        <div className='hidden lg:flex ml-20'>
          <SocialLinks />
        </div>
        {/* Theme Switcher */}
        {/* <div className='hidden lg:flex justify-end'>
          <ThemeSwitcher />
        </div> */}
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
            ? 'container flex flex-col mx-auto lg:hidden origin-top animate-open-mobile-menu transition'
            : 'hidden'
        }`}
        id='mobile-menu'
      >
        <div className='flex flex-row'>
        <TopNavLinks setMobileMenu={setMobileMenu} />
        </div>
        <SocialLinks />
      </div>
    </nav>
  );
}
