import Card from '@/components/Card';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <div className='flex'>
        <div className='flex-auto flex-col justify-center p-2'>
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
