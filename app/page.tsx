import Card from '@/components/Card';
import SidebarInfo from '@/components/SidebarInfo';
import { getPosts } from '@/libs/ghost';

const cardBoilerplate = () => {
  let cardArr = [];
  for (var i = 0; i < 3; i++) {
    cardArr.push(<Card key={i} />);
  }
  return cardArr;
};

export default async function Home() {
  const getPost = await getPosts();
  console.log(getPost);
  return (
    <div className='container mx-auto'>
      <div className='flex'>
        <div className='flex-auto flex-col basis-4/6 py-2 divide-y'>
          {getPost.map((item: JSON) => {
            return (
              <Card
                title={item.title}
                custom_excerpt={item.custom_excerpt}
                primary_tag={item.primary_tag.name}
                slug={item.slug}
                image={item.feature_image}
              />
            );
          })}
        </div>
        <div className='flex-auto flex-col hidden md:flex md:basis-2/6 pt-2'>
          <SidebarInfo />
        </div>
      </div>
    </div>
  );
}
