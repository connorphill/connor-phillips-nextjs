import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image';
import Link from 'next/link';

import { getSinglePost } from '@/libs/ghost';

type Props = {
  params: { title: string, description: string };
};


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getSinglePost(params.slug);
  if (!post){    return {
      title: "Not Found",
      description: "The page is not found",
    };
    }


  return {
    title: post?.title,
    description: post?.excerpt,
    alternates: {
      canonical: `/${post.slug}`,
    },
    openGraph: {
        url: post?.url,
        siteName: 'Connor Phillips',
        // images: [{post?.feature_image}],
        title: post?.title,
        description: post?.excerpt,
        locale: 'en_US',
        type: 'website',
        images: [post?.feature_image]
    },
    twitter: {
        card: 'summary_large_image',
        title: post?.title,
        description: post?.excerpt,
        images: [post?.feature_image]
    }
  };
}

async function Post({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const post = await getSinglePost(params.slug);

    const metadata = {
    title: `${post?.title} | Connor Phillips`,
    description: post?.excerpt
    }

  if (post) {
    const options = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    }; 

    post.dateFormatted = new Intl.DateTimeFormat('en-US', options).format(
      new Date(post.published_at)
    );
  }
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col md:px-10 py-5 md:py-10'>
        <div className='flex flex-col lg:px-44' id='content-header'>
          <div className='py-5'>
            <Link href={`/tag/${post?.primary_tag?.name?.toLowerCase()}`}>
              <h3 className='text-md md:text-2xl text-gold-500 hover:text-gold-700'>
                {post?.primary_tag?.name}
              </h3>
            </Link>
          </div>
          <div id='header-title'>
            <h1 className='text-3xl md:text-5xl'>{post?.title}</h1>
            <h3 className='py-6 font-bold'>
              {post?.dateFormatted} <span class='bull px-3'>&bull;</span>{' '}
              Reading Time: {post?.reading_time} Minutes
            </h3>
            <h2 className='py-3 italic text-md md:text-xl border-2 border-gold-500 p-2 mb-3' id='content-footer'>
              {post?.excerpt}
            </h2>
          </div>
          <div className='md:mx-auto overflow-hidden  md:h-full relative md:order-last'>
            <Image
              src={post?.feature_image}
              width={600}
              height={400}
              className='max-md:h-32 object-cover'
              alt='Test'
            />
          </div>
        </div>
        <div
          className='prose dark:prose-invert lg:px-44 pt-10 max-w-none prose-p:text-lg prose-blockquote:text-lg tracking-wide leading-7'
          id='content-body'
          dangerouslySetInnerHTML={{ __html: post?.html }}
        ></div>
      </div>
    </div>
  );
}

export { Post as default}
