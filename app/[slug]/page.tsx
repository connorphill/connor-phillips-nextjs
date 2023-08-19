import React from 'react';
import { getSinglePost } from '@/libs/ghost';
import Image from 'next/image';

async function fetchData(context) {
  const slug = context?.params?.slug;
}

export default async function Post({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const posts = await getSinglePost(params.slug);
  if (posts) {
    console.log(posts);
  }
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col md:px-10 py-5'>
        <div className='flex flex-col' id='content-header'>
          <div className='' id='header-title'>
            <h1 className='text-5xl'>{posts?.title}</h1>
          </div>
          <div>
            <h2 className='text-2xl'>{posts?.primary_tag?.name}</h2>
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
          id='content-body'
          dangerouslySetInnerHTML={{ __html: posts?.html }}
        ></div>
        <div id='content-footer'>{posts?.excerpt}</div>
      </div>
    </div>
  );
}
