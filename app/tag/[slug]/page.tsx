import React from 'react';
import type { Metadata } from 'next'
import { getSingleTag, getPostsFromTag } from '../../../libs/ghost';
import Card from '../../../components/Card';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tags = await getSingleTag(params.slug);
  return {
    title: `${tags?.name} | Connor Phillips`,
    description: `Articles that Connor Phillips has written about related to ${tags?.name}.`,
    alternates: {
      canonical: `/tag/${tags?.slug}`,
    },
    openGraph: {
        url: `/tag/${tags?.slug}`,
        title: `${tags?.name} | Connor Phillips`,
        description: `Articles that Connor Phillips has written about related to ${tags?.name}.`,
    },
    twitter: {
      title: `${tags?.name} | Connor Phillips`,
      description: `Articles that Connor Phillips has written about related to ${tags?.name}.`,
    }
  }
}

export default async function Tag({ params }: { params: { slug: string } }) {
  var posts: any = [];
  const tags = await getSingleTag(params.slug);
  if (tags) {
    posts = await getPostsFromTag(tags.slug);
  }

  // console.log(posts);
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col py-5 md:py-10'>
        <div className='flex flex-col pb-10' id='content-header'>
          <h1 className='text-3xl lg:text-5xl font-semibold text-midnight-500'>{tags?.name}</h1>
        </div>
        <div className='py-2 divide-y' id='content-body'>
          <ul>
            {posts.map((item: any) => {
              
              var imagePath;
              var excerpt;

              if(!item.custom_excerpt){
                excerpt = `${item.excerpt}..`;
              } else {
                excerpt = item.custom_excerpt;
              }

              if (
                !item.hasOwnProperty('feature_image') ||
                item.feature_image === null
              ) {
                console.log('No Image Found');
                imagePath = '';
              } else if (item.feature_image.includes('s3')) {
                imagePath =
                  'https:/s3.amazonaws.com' +
                  item.feature_image?.split('//s3.amazonaws.com')[1];
              } else {
                imagePath = item.feature_image;
              }
              return (
                <Card
                  title={item.title}
                  custom_excerpt={excerpt}
                  primary_tag=''
                  slug={item.slug}
                  image={imagePath} 
                  key={''}                
                  />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
