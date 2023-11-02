import Image from 'next/image';
import React from 'react';
import NewsletterForm from '../Global/Newsletter';

export default function SidebarInfo() {
  return (
    <div className='ml-20 p-2'>
      <div className=' mb-5 bg-gray-100'>
        {/* Header */}
        <div className='flex flex-col items-center justify-center px-4 py-2'>
          <div className='relative mb-2 h-20 w-20'>
            <Image
              src={'/connor-phillips.jpeg'}
              layout='fill'
              objectFit='cover'
              alt={'Profile Picture'}
              className='rounded-full'
            />
          </div>
          <div className='flex flex-row'>
            <h1 className='ml-2 text-2xl font-bold'>Connor Phillips</h1>
          </div>
        </div>
        {/* Sub-header */}
        <div className='flex flex-row items-center justify-center px-4'>
          <p className='lg:text-md py-1 text-sm font-light text-gray-500'>
            contact [at] connorphillips.com
          </p>
        </div>
        {/* Body */}
        <div className='p-4'>
          <p className='font-light'>
            Data leader with a decade of startup and agency experience helping
            B2C and B2B businesses with their mobile app and web-based products.
          </p>
          <p className='pt-2 font-light'>
            Currently, I lead the US Analytics team at the growth marketing
            agency,{' '}
            <a
              href='https://www.twigeo.com/'
              className='text-gold-500 hover:text-gold-700'
            >
              Twigeo
            </a>
            , working with growth-focused clients ranging in industries from
            ride share to language learning.
          </p>
        </div>
      </div>
      <NewsletterForm />
    </div>
  );
}
