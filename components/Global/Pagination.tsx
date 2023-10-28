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
    <div className='py-10'>
      <ul className='flex justify-evenly lg:-ml-9'>
        { prevPage === null ? (
            null
          ) : (
            <li className='px-2 flex text-center grow-0'><Link href={prevPage === 1 ? '/' : `/page/${prevPage?.toString()}`} className='rounded-full border-2 text-midnight-500 border-midnight-500 hover:bg-midnight-500 hover:text-white p-2'>Previous Page</Link></li>
          )
        }
        <li className='flex self-center px-2 font-semibold text-midnight-500 text-center'>
        Page {pageNum?.toString()} of {pageTot?.toString()}
      </li>
        { nextPage ? (
          <li className='px-2 flex text-center grow-0'><Link href={`/page/${nextPage?.toString()}`} className='rounded-full border-2 text-midnight-500 border-midnight-500 hover:bg-midnight-500 hover:text-white p-2'>Next Page</Link></li>
          ) : (
            null
          )
        }
      </ul>

      {/* <ul className='flex justify-evenly space-x-5 lg:-ml-9'>
      {prevPage && prevPage === 1 ? (
        <li className='px-2 flex text-center'><Link href='/' className='rounded-full border-2 text-midnight-500 border-midnight-500 hover:bg-midnight-500 hover:text-white p-2'>Previous Page</Link></li>
      ) : prevPage ? (
        <li className='px-2 flex text-center'><Link href={prevPage?.toString()}>Previous Page</Link></li>
      ) : null}
      <p className='flex self-center px-2 font-semibold text-midnight-500 text-center'>
        Page {pageNum?.toString()} of {pageTot?.toString()}
      </p>
      {nextPage ? <li className='px-2 flex text-center'><Link href={`/page/${nextPage?.toString()}`} className='rounded-full border-2 text-midnight-500 border-midnight-500 hover:bg-midnight-500 hover:text-white p-2'>Next Page</Link></li> : null}
      </ul> */}
    </div>
  );
}
