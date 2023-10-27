import Link from 'next/link';
import React from 'react';

interface PaginationProps {
  pageNum: number | undefined | null;
  pageTot: number | undefined | null;
  nextPage: number | undefined | null;
  prevPage: number | undefined | null;
}

export default function Pagination({
  pageNum,
  pageTot,
  nextPage,
  prevPage,
}: PaginationProps) {
  return (
    <div className='flex flex-row py-10'>
      <ul className='flex flex-row px-5'>
      {prevPage && prevPage === 1 ? (
        <li className='px-2'><Link href='/' className='rounded-full border-2 border-midnight-500 hover:bg-midnight-500 hover:text-white p-2'>Previous Page</Link></li>
      ) : prevPage ? (
        <li className='px-2'><Link href={prevPage?.toString()}>Previous Page</Link></li>
      ) : null}
      <p className='px-2'>
        Page {pageNum?.toString()} of {pageTot?.toString()}
      </p>
      {nextPage ? <li className='px-2'><Link href={`/page/${nextPage?.toString()}`} className='rounded-full border-2 border-midnight-500 hover:bg-midnight-500 hover:text-white p-2'>Next Page</Link></li> : null}
      </ul>
    </div>
  );
}
