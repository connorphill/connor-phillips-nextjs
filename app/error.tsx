'use client';

import Link from 'next/link';

const Error = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-6xl font-semibold text-gray-800'>404</h1>
        <p className='text-xl text-gray-600'>Page not found</p>
        <Link
          href='/'
          className='mt-4 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300'
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
