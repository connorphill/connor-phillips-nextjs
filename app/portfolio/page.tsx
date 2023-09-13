import Image from 'next/image';
import React from 'react';

export default function Portfolio() {
  return (
    <div className='container mx-auto'>
    <div className='flex flex-col'>
        <div className='py-5' id='start-here'>
          <h1 className='text-3xl lg:text-5xl'>Portfolio</h1>
          <p className='py-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            voluptate veritatis ipsa unde blanditiis eos a qui ad aperiam.
            Repudiandae ratione autem libero sint enim neque accusamus
            accusantium inventore voluptates?
          </p>
        </div>
        {/* Businesses Section */}
        <div className='flex flex-col' id='businesses'>
          <h2 className='text-2xl lg:text-4xl'>Businesses</h2>
          <p className='py-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            voluptate veritatis ipsa unde blanditiis eos a qui ad aperiam.
            Repudiandae ratione autem libero sint enim neque accusamus
            accusantium inventore voluptates?
          </p>
          <div className='flex flex-row justify-between py-5'>
            <div className='basis-1/3'>
              <div>
                <h3 className='text-xl'>Title</h3>
              </div>
              <div className='w-200 h-200 overflow-hidden'>
                <Image
                  src='/sunrise-2-5x7.jpeg'
                  width={200}
                  height={200}
                  className='max-md:h-200 max-md:h-200 object-cover'
                  alt='image'
                />
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                aliquam odit dolores accusantium eaque similique, ab dolor
                voluptatem? Autem fuga tenetur ut natus dolore et....
              </div>
              <div>
                <button className='p-5 bg-slate-600 text-white mt-5'>
                  Button
                </button>
              </div>
            </div>
            <div className='basis-1/3'>
              <div>Title</div>
              <div>Image</div>
              <div>Body</div>
              <div>Button</div>
            </div>
            <div className='basis-1/3'>
              <div>Title</div>
              <div>Image</div>
              <div>Body</div>
              <div>Button</div>
            </div>
          </div>
        </div>
        <div className='' id='projects'>
          <h2 className='text-2xl lg:text-4xl'>Projects</h2>
          <p className='py-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            voluptate veritatis ipsa unde blanditiis eos a qui ad aperiam.
            Repudiandae ratione autem libero sint enim neque accusamus
            accusantium inventore voluptates?
          </p>
        </div>
      </div>
      </div>
  );
}
