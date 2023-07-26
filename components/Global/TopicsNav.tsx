import React, { useState } from 'react';

export default function TopicsNav() {
  const [topicsMenu, setTopicsMenu] = useState(true);
  return (
    <>
      {/* Nav Link */}
      <li className='flex flex-row relative'>
        <a
          href=''
          className='flex'
          onMouseEnter={() => setTopicsMenu(true)}
          //   onMouseLeave={() => setTopicsMenu(false)}
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
              d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
            />
          </svg>
          <p className='ml-2 mr-2'>Topics</p>
          {topicsMenu ? (
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
                d='M4.5 15.75l7.5-7.5 7.5 7.5'
              />
            </svg>
          ) : (
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
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          )}
        </a>
      </li>
      {/* Nav Menu */}
      <div className={`${topicsMenu ? 'lg:absolute bg-white pt-5' : 'hidden'}`}>
        <ul>
          <li>Link #1</li>
          <li>Linke #2</li>
        </ul>
      </div>
    </>
  );
}
