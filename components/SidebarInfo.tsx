import Image from 'next/image';
import React from 'react';

export default function SidebarInfo() {
  return (
    <div className='pt-2 ml-20'>
      <div className='flex flex-row p-2 mb-3'>
        <Image
          src={'/hotel-empire.jpeg'}
          width={50}
          height={50}
          alt={'Profile Picture'}
          className='rounded-full'
        />
        <h3 className='text-2xl font-bold ml-2'>Lorem Ipsum</h3>
      </div>
      <div className='p-2'>
        <p className='font-light'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
          quibusdam iusto cupiditate aut optio a blanditiis cum, quas aliquam
          facere dolores inventore suscipit earum dicta? Dolorem quisquam fugiat
          optio neque.
        </p>
      </div>
    </div>
  );
}
