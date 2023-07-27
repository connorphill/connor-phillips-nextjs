import React from 'react';

export default function About() {
  return (
    <div className='container mx-auto px-10'>
      <div className='py-3' id='introduction'>
        <h1 className='text-5xl'>About</h1>
        <p className='py-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad
          illo quis adipisci sint vero ratione animi facere explicabo unde
          debitis commodi reprehenderit, molestias cum eligendi rem sapiente
          consequatur tenetur. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eveniet, reprehenderit dolor aspernatur perspiciatis
          exercitationem porro ea inventore sunt, temporibus, non nulla?
          Tempore, deleniti aspernatur voluptatibus itaque possimus aliquid enim
          officiis?
        </p>
      </div>
      <div className='py-3' id='skills'>
        <h2 className='text-5xl'>Skills</h2>
        <div className='flex flex-col lg:flex-row mt-5 justify-around'>
          <div className='flex flex-col py-2'>
            <h3 className='text-2xl flex items-center'>
              <svg
                width='512'
                height='512'
                viewBox='0 0 48 48'
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 mr-2'
              >
                <mask id='ipSData0'>
                  <g
                    fill='none'
                    stroke='#fff'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='4'
                  >
                    <path d='M44 11v27c0 3.314-8.954 6-20 6S4 41.314 4 38V11' />
                    <path d='M44 29c0 3.314-8.954 6-20 6S4 32.314 4 29m40-9c0 3.314-8.954 6-20 6S4 23.314 4 20' />
                    <ellipse cx='24' cy='10' fill='#fff' rx='20' ry='6' />
                  </g>
                </mask>
                <path fill='#000000' d='M0 0h48v48H0z' mask='url(#ipSData0)' />
              </svg>
              Data
            </h3>
            <div className='flex py-3'>
              <ul className='space-y-4'>
                <li>Skill #1</li>
                <li>Skill #2</li>
                <li>Skill #3</li>
                <li>Skill #4</li>
                <li>Skill #5</li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <h3 className='text-2xl flex items-center'>
              <svg
                width='512'
                height='512'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 mr-2'
              >
                <path
                  fill='#000000'
                  d='M21.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 6h-5a1 1 0 0 0 0 2h2.59L13 13.59l-3.29-3.3a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 12.41l3.29 3.3a1 1 0 0 0 1.42 0L20 9.41V12a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38Z'
                />
              </svg>
              Growth
            </h3>
            <div className='flex py-3'>
              <ul className='space-y-4'>
                <li>Skill #1</li>
                <li>Skill #2</li>
                <li>Skill #3</li>
                <li>Skill #4</li>
                <li>Skill #5</li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <h3 className='text-2xl flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 mr-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09'
                />
              </svg>
              Marketing Science
            </h3>
            <div className='flex py-3'>
              <ul className='space-y-4'>
                <li>Skill #1</li>
                <li>Skill #2</li>
                <li>Skill #3</li>
                <li>Skill #4</li>
                <li>Skill #5</li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <h3 className='text-2xl flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 ml-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z'
                />
              </svg>
              Software Development
            </h3>
            <div className='flex py-3'>
              <ul className='space-y-4'>
                <li>Skill #1</li>
                <li>Skill #2</li>
                <li>Skill #3</li>
                <li>Skill #4</li>
                <li>Skill #5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
