import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageHandler from './Global/ImageHandler';

interface CardProps {
  key: string;
  title: string;
  custom_excerpt: string;
  primary_tag: string;
  slug: string;
  image: string;
}

export default function Card({
  // id,
  title,
  custom_excerpt,
  primary_tag,
  slug,
  image,
}: CardProps) {
  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-center py-3'>
        <div className='lg:mx-auto overflow-hidden lg:h-full relative lg:order-last lg:basis-2/6 md:pl-5'>
          <Link href={`/${slug}`}>
            {image ? (
              <ImageHandler src={image} width={600} height={400} alt={title} />
            ) : null}
          </Link>
        </div>
        <div className='py-2 md:basis-4/6' id='card-body'>
          <Link
            href={`/tag/${primary_tag.toLowerCase()}`}
            className='pb-3 text-gold-600 hover:text-gold-700 hover:before:scale-x-100 hover:before:origin-left text-md lg:text-xl relative'
            id='card-tag'
          >
            {primary_tag}
          </Link>
          <h2 className='text-3xl lg:text-5xl py-3'>
            <Link
              href={`/${slug}`}
              className='text-midnight-400 hover:text-midnight-700'
            >
              {title}
            </Link>
          </h2>
          <p className='pb-2 font-light'>{custom_excerpt}</p>
        </div>
      </div>
    </div>
  );
}
