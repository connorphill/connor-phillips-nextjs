'use client';

import Link from 'next/link';
import React from 'react';

const Error = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-6xl font-semibold text-gray-800'>404</h1>
        <p className='text-xl text-gray-600'>Page not found</p>
        <Link
          href='/'
          className='mt-4 inline-block rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600'
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
