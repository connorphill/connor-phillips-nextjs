import Card from '@/components/Card';
import SidebarInfo from '@/components/Feed/SidebarInfo';
import Pagination from '@/components/Global/Pagination';
import { getPosts } from '@/libs/ghost';

export default async function Home() {
  const getPost = await getPosts();
  return (
    <div className='container mx-auto'>
      <div className='flex'>
        <div className='flex-auto flex-col basis-4/6 py-2 divide-y'>
          {getPost.map((item) => {
            return (
              <Card
                title={item.title}
                custom_excerpt={item.custom_excerpt}
                primary_tag={item.primary_tag.name}
                slug={item.slug}
                image={item.feature_image}
                key={''}
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
          pageNum={getPost?.meta?.pagination.page}
          pageTot={getPost?.meta?.pagination.pages}
          nextPage={getPost?.meta?.pagination.next}
          prevPage={getPost?.meta?.pagination.prev}
        />
      </div>
    </div>
  );
}
