import Card from '@/components/Card';
import SidebarInfo from '@/components/SidebarInfo';

const cardBoilerplate = () => {
  let cardArr = [];
  for (var i = 0; i < 3; i++) {
    cardArr.push(<Card key={i} />);
  }
  return cardArr;
};

export default function Home() {
  return (
    <div className='container mx-auto'>
      <div className='flex'>
        <div className='flex-auto flex-col basis-4/6 py-2 divide-y'>
          {cardBoilerplate()}
        </div>
        <div className='flex-auto flex-col hidden md:flex md:basis-2/6 pt-2'>
          <SidebarInfo />
        </div>
      </div>
    </div>
  );
}
