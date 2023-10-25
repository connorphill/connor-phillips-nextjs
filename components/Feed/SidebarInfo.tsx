import Image from 'next/image';
import React from 'react';
import NewsletterForm from '../Global/Newsletter';

export default function SidebarInfo() {
  return (
    <div className='p-2 ml-20'>
    <div className=' bg-gray-100 mb-5'>
      {/* Header */}
      <div className='flex flex-col p-2 mb-3 items-center justify-center'>
        <div className='relative h-20 w-20 mb-2'>
          <Image
            src={'/connor-phillips.jpeg'}
            layout='fill'
            objectFit='cover'
            alt={'Profile Picture'}
            className='rounded-full'
          />
        </div>
        <div className='flex flex-row'>
          <h1 className='text-2xl font-bold ml-2 '>Connor Phillips</h1>
        </div>
      </div>
      {/* Sub-header */}
      <div className='flex flex-row p-2 items-center justify-center'>
        <p className='text-gray-500 font-light'>
          contact [at] connorphillips.com
        </p>
      </div>
      {/* Body */}
      <div className='p-2'>
        <p className='font-light'>
          Marketing Analytics leader with a decade of startup and agency
          experience helping B2C and B2B businesses with their mobile app and
          web-based products.
        </p>
        <p className='font-light pt-2'>
          Currently, I lead the US Analytics team at the growth marketing
          agency,{' '}
          <a
            href='https://www.twigeo.com/'
            className='text-gold-500 hover:text-gold-700'
          >
            Twigeo
          </a>
          , working with growth-focused clients ranging in industries from ride
          share to language learning.
        </p>
      </div>
    </div>
      <NewsletterForm />
      </div>
  );
}
