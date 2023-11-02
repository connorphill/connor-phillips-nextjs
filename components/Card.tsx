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
      <div className='flex flex-col justify-center py-3 lg:flex-row'>
        <div className='relative overflow-hidden md:pl-5 lg:order-last lg:mx-auto lg:h-full lg:basis-2/6'>
          <Link href={`/${slug}`}>
            {image ? (
              <ImageHandler src={image} width={600} height={400} alt={title} />
            ) : null}
          </Link>
        </div>
        <div className='py-2 md:basis-4/6' id='card-body'>
          <Link
            href={`/tag/${primary_tag.toLowerCase()}`}
            className='text-md relative pb-3 text-gold-600 hover:text-gold-700 hover:before:origin-left hover:before:scale-x-100 lg:text-xl'
            id='card-tag'
          >
            {primary_tag}
          </Link>
          <h2 className='py-3 text-3xl lg:text-5xl'>
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
