import React from 'react';
import Image from 'next/image';

export default function Card() {
  return (
    <div className='flex flex-col justify-center py-3'>
      <div className='md:mx-auto overflow-hidden  md:h-full relative'>
        <Image
          src='/hotel-empire.jpeg'
          width={600}
          height={400}
          //   fill={true}
          className='max-md:h-32 object-cover'
          alt='Test'
        />
      </div>
      <div className='py-3'>
        <h2 className='text-5xl'>Header</h2>
        <h3 className='text-xl pt-2'>Category</h3>
      </div>
      <div>
        <p className=''>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          veritatis sapiente deserunt eligendi explicabo voluptatibus, quis qui
          rem suscipit voluptas adipisci eum ea inventore similique vero
          voluptatem temporibus numquam doloribus!
        </p>
      </div>
    </div>
  );
}
