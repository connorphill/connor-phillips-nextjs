import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

import { getSinglePost } from '../../libs/ghost';
import NewsletterForm from '../../components/Global/Newsletter';
import ImageHandler from '../../components/Global/ImageHandler';

type Props = {
  params: { title: string; description: string };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getSinglePost(params.slug);

  let metaDescription = '';

  if (post?.excerpt === null || post?.excerpt === '') {
    metaDescription = post?.html.substr(0, 155);
  } else {
    metaDescription = post?.excerpt.substr(0, 155);
  }

  if (!post) {
    return {
      title: 'Not Found',
      description: 'The page is not found',
    };
  }

  var metaImage = '';
  if (post?.feature_image) {
    metaImage = post?.feature_image;
  }

  return {
    title: `${post?.title} | Connor Phillips`,
    description: metaDescription,
    alternates: {
      canonical: `/${post.slug}`,
    },
    openGraph: {
      url: post?.url,
      siteName: 'Connor Phillips',
      images: [metaImage],
      title: post?.title,
      description: post?.excerpt,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.title,
      description: post?.excerpt,
      images: [metaImage],
    },
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post: any = await getSinglePost(params.slug);

  const metadata = {
    title: `${post?.title} | Connor Phillips`,
    description: post?.excerpt,
  };

  if (post) {
    const options: any = {
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
      <div className='flex flex-col py-5 md:px-10 md:py-10'>
        <div className='flex flex-col lg:px-44' id='content-header'>
          <div className='py-5'>
            <Link href={`/tag/${post?.primary_tag?.name?.toLowerCase()}`}>
              <h3 className='text-md text-gold-500 hover:text-gold-700 md:text-2xl'>
                {post?.primary_tag?.name}
              </h3>
            </Link>
          </div>
          <div id='header-title'>
            <h1 className='text-3xl md:text-5xl'>{post?.title}</h1>
            <h3 className='py-6 font-bold'>
              {post?.dateFormatted} <span className='bull px-3'>&bull;</span>{' '}
              Reading Time: {post?.reading_time} Minutes
            </h3>
            <h2
              className='text-md mb-3 border-2 border-gold-500 p-2 py-3 italic md:text-xl'
              id='content-footer'
            >
              {post?.excerpt}
            </h2>
          </div>
          {post?.feature_image ? (
            <div className='relative overflow-hidden  md:order-last md:mx-auto md:h-full'>
              <ImageHandler
                src={post?.feature_image}
                width={600}
                height={400}
                alt={post?.title}
              />
            </div>
          ) : null}
        </div>
        <div
          className='prose max-w-none pt-10 leading-7 tracking-wide dark:prose-invert prose-p:text-lg prose-blockquote:text-lg lg:px-44'
          id='content-body'
          dangerouslySetInnerHTML={{ __html: post?.html }}
        ></div>
        <div className='my-8 lg:px-44'>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}

// export { Post as default}
