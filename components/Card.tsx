import React from 'react';
import Image from 'next/image';

export default function Card() {
  return (
    <div className='basis-5/6'>
      <div className='flex flex-col md:flex-row justify-center py-3'>
        <div className='md:mx-auto overflow-hidden  md:h-full relative md:order-last'>
          <Image
            src='/hotel-empire.jpeg'
            width={600}
            height={400}
            className='max-md:h-32 object-cover'
            alt='Test'
          />
        </div>
        <div>
          <a
            href='#'
            className='pb-1 text-cyan-300 hover:text-cyan-500 hover:before:scale-x-100 hover:before:origin-left text-xl relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-cyan-500 before:absolute before:left-0 before:bottom-0'
          >
            Category
          </a>
          <h2 className='text-5xl py-3'>Title</h2>
          <p className='pb-2 font-light'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            veritatis sapiente deserunt eligendi explicabo voluptatibus, quis
            qui rem suscipit voluptas adipisci eum ea inventore similique vero
            voluptatem temporibus numquam doloribus!
          </p>
          <button className='bg-blue-100 hover:bg-blue-300 p-2'>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
