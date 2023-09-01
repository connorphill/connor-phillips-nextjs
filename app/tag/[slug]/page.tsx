import React from 'react';
import { getSingleTag, getPostsFromTag } from '@/libs/ghost';
import Card from '@/components/Card';

export default async function Tag({ params }: { params: { slug: string } }) {
  var posts = [];
  const tags = await getSingleTag(params.slug);
  if (tags) {
    posts = await getPostsFromTag(tags.slug);
  }
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col py-5 md:py-10'>
        <div className='flex flex-col pb-10' id='content-header'>
          <h1 className='lg:text-6xl text-gold-500'>{tags?.name}</h1>
        </div>
        <div id='content-body'>
          <ul>
            {posts.map((item) => {
              console.log(`Page: ${item.slug}`);
              console.log(`Image: ${item.feature_image}`);
              var imagePath;
              if (
                !item.hasOwnProperty('feature_image') ||
                item.feature_image === null
              ) {
                console.log('No Image Found');
                imagePath = '';
              } else {
                imagePath =
                  'https:/s3.amazonaws.com' +
                  item.feature_image?.split('//s3.amazonaws.com')[1];
                console.log(imagePath);
              }
              return (
                <Card
                  title={item.title}
                  custom_excerpt={item.custom_excerpt}
                  primary_tag=''
                  slug={item.slug}
                  image={imagePath}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
