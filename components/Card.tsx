import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  // console.log(
  //   `title: ${title}\n custom_excerpt: ${custom_excerpt}\n primary_tag: ${primary_tag}\n slug: ${slug}\n image: ${image}`
  // );
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-center py-3'>
        <div className='md:mx-auto overflow-hidden md:h-full relative md:order-last md:basis-2/6 md:pl-5'>
          <Link href={`/${slug}`}>
            {image ? (
              <Image
                src={image}
                width={600}
                height={400}
                className='max-md:h-32 object-cover'
                alt='Test'
              />
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
          <button className='bg-midnight-200 hover:bg-midnight-500 hover:text-white p-2'>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
