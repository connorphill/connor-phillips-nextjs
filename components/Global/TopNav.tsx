'use client';
import React, { useState, useRef, useEffect } from 'react';
import TopNavLinks from './TopNavLinks';
import SocialLinks from './SocialLinks';

export default function TopNav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  // const [mobileClick, setMobileClick] = useState(false);

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
          <h2 className='text-3xl font-bold lg:text-5xl'>
            <a href='/'>Connor Phillips</a>
          </h2>
        </div>
        {/* Primary Nav */}
        <div className='ml-20 hidden lg:flex'>
          <TopNavLinks setMobileMenu={setMobileMenu as () => void} />
        </div>
        {/* Primary Nav */}
        <div className='ml-20 hidden lg:flex'>
          <SocialLinks />
        </div>
        {/* Theme Switcher */}
        {/* <div className='hidden lg:flex justify-end'>
          <ThemeSwitcher />
        </div> */}
        {/* Mobile Button */}
        <div className='flex items-center lg:hidden'>
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
              className='h-6 w-6'
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
        className={`container mx-auto flex flex-col transition-opacity delay-150 duration-300 ease-in-out lg:hidden ${
          mobileMenu ? 'visible h-full opacity-100' : 'invisible h-0 opacity-0'
        }`}
        id='mobile-menu'
      >
        <div className='flex flex-row'>
          <TopNavLinks setMobileMenu={setMobileMenu as () => void} />
        </div>
        <SocialLinks />
      </div>
    </nav>
  );
}
