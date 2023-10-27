import React from 'react';
import Card from '@/components/Card';
import SidebarInfo from '@/components/Feed/SidebarInfo';
import Pagination from '@/components/Global/Pagination';
import { getPostsByPage } from '@/libs/ghost';

interface PostJSONProps {
  id: string;
  title: string;
  custom_excerpt: string;
  primary_tag: {
    name: string;
  };
  slug: string;
  feature_image: string;
}

export default async function PagePosts({
  params,
}: {
  params: { slug: string };
}) {
  const getPost = await getPostsByPage(Number(params?.slug));
  var pagination = getPost?.meta?.pagination;

  return (
    <div className='container mx-auto'>
      <div className='flex'>
        <div className='flex-auto flex-col basis-4/6 py-2 divide-y'>
          {getPost.map((item: PostJSONProps) => {
            if (
              item?.feature_image &&
              item?.feature_image.slice(0, 2) == '//'
            ) {
              item.feature_image = 'https:' + item?.feature_image;
            }
            return (
              <Card
                key={item?.id}
                title={item?.title}
                custom_excerpt={item?.custom_excerpt}
                primary_tag={item?.primary_tag.name}
                slug={item?.slug}
                image={item?.feature_image}
              />
            );
          })}
        </div>
        <div className='flex-auto flex-col hidden md:flex md:basis-2/6 pt-2'>
          <SidebarInfo />
        </div>
      </div>
      <div className='flex justify-center'>
        <Pagination
          pageNum={pagination?.page}
          pageTot={pagination?.pages}
          nextPage={pagination?.next}
          prevPage={pagination?.prev}
        />
      </div>
    </div>
  );
}
