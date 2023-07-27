'use client';
import React from 'react';

export default function SideNav() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    console.log(element);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };
  return (
    <div className='flex flex-col fixed'>
      <ul className='space-y-4'>
        <li className='pl-5 pr-2 text-lg font-semibold bg-yellow-500'>
          <a href='#' onClick={() => scrolltoHash('start-here')}>
            Start Here
          </a>
        </li>
        <li className='pl-5 pr-2 text-lg font-light'>
          <a href='#' onClick={() => scrolltoHash('businesses')}>
            Businesses
          </a>
        </li>
        <li className='pl-5 pr-2 text-lg font-light'>
          <a href='#' onClick={() => scrolltoHash('projects')}>
            Projects
          </a>
        </li>
      </ul>
    </div>
  );
}
