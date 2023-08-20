import React from 'react';
import { getSinglePost } from '@/libs/ghost';
import Image from 'next/image';
import Link from 'next/link';

export default async function Post({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const posts = await getSinglePost(params.slug);

  if (posts) {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };

    posts.dateFormatted = new Intl.DateTimeFormat('fr-CA', options).format(
      new Date(posts.published_at)
    );
  }
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col md:px-10 py-5 md:py-10'>
        <div className='flex flex-col lg:px-44' id='content-header'>
          <div className='py-5'>
            <Link href={`/tag/${posts?.primary_tag?.name?.toLowerCase()}`}>
              <h3 className='text-md md:text-2xl'>
                {posts?.primary_tag?.name}
              </h3>
            </Link>
          </div>
          <div id='header-title'>
            <h1 className='text-3xl md:text-5xl'>{posts?.title}</h1>
            <h2 className='pt-3 italic text-md md:text-xl' id='content-footer'>
              {posts?.excerpt}
            </h2>
            <p className='py-6 font-bold'>
              {posts?.dateFormatted} <span class='bull'>&bull;</span> Reading
              Time: {posts?.reading_time} Minutes
            </p>
          </div>
          <div className='md:mx-auto overflow-hidden  md:h-full relative md:order-last'>
            <Image
              src={posts?.feature_image}
              width={600}
              height={400}
              className='max-md:h-32 object-cover'
              alt='Test'
            />
          </div>
        </div>
        <div
          className='prose lg:px-44 pt-10 max-w-none prose-p:text-lg md:prose-p:text-2xl'
          id='content-body'
          dangerouslySetInnerHTML={{ __html: posts?.html }}
        ></div>
      </div>
    </div>
  );
}
