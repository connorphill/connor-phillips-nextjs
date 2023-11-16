import Card from '../components/Card';
import SidebarInfo from '../components/Feed/SidebarInfo';
import Pagination from '../components/Global/Pagination';
import { getPosts } from '../libs/ghost';
import React from 'react';

export default async function Home() {
  const getPost: any = await getPosts();

  return (
    <div className='mx-auto px-5 md:container md:px-0'>
      <div className='flex'>
        <div className='flex-auto basis-4/6 flex-col divide-y py-2'>
          {getPost.posts.map((item: any) => {
            var excerpt;

            if (!item.custom_excerpt) {
              excerpt = `${item.excerpt}...`;
            } else {
              excerpt = item.custom_excerpt;
            }

            return (
              <Card
                title={item.title}
                custom_excerpt={excerpt}
                primary_tag={item?.primary_tag?.name}
                slug={item.slug}
                image={item.feature_image}
                key={''}
              />
            );
          })}
        </div>
        <div className='hidden flex-auto flex-col pt-2 md:flex md:basis-2/6'>
          <SidebarInfo />
        </div>
      </div>
      <div className='flex justify-center'>
        <Pagination
          pageNum={getPost?.meta?.pagination.page}
          pageTot={getPost?.meta?.pagination.pages}
          nextPage={getPost?.meta?.pagination.next}
          prevPage={getPost?.meta?.pagination.prev}
        />
      </div>
    </div>
  );
}
