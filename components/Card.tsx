import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: String;
  custom_excerpt: String;
  primary_tag: String;
  slug: String;
  image: String;
}

export default function Card({
  title,
  custom_excerpt,
  primary_tag,
  slug,
  image,
}: CardProps) {
  return (
    <div className=''>
      <div className='flex flex-col md:flex-row justify-center py-3'>
        <div className='md:mx-auto overflow-hidden  md:h-full relative md:order-last'>
          <Image
            src={image}
            width={600}
            height={400}
            className='max-md:h-32 object-cover'
            alt='Test'
          />
        </div>
        <div className='py-2' id='card-body'>
          <a
            href='#'
            className='pb-1 text-green-400 hover:text-green-500 hover:before:scale-x-100 hover:before:origin-left text-md lg:text-xl relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-500 before:absolute before:left-0 before:bottom-0'
          >
            {primary_tag}
          </a>
          <h2 className='text-3xl lg:text-5xl py-3'>
            <a href='#'>{title}</a>
          </h2>
          <p className='pb-2 font-light'>{custom_excerpt}</p>
          <button className='bg-blue-100 hover:bg-blue-300 p-2'>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
