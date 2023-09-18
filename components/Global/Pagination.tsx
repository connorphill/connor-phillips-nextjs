import Link from 'next/link';
import React from 'react';

interface PaginationProps {
  pageNum: Number;
  pageTot: Number;
  nextPage: Number;
  prevPage: Number;
}

export default function Pagination({
  pageNum,
  pageTot,
  nextPage,
  prevPage,
}: PaginationProps) {
  return (
    <div className='flex flex-row space-x-10 py-10'>
      {prevPage && prevPage === 1 ? (
        <Link href='/'>Previous Page</Link>
      ) : prevPage ? (
        <Link href={prevPage.toString()}>Previous Page</Link>
      ) : null}
      <p>
        Page {pageNum.toString()} of {pageTot.toString()}
      </p>
      {nextPage ? <Link href={`/page/${nextPage.toString()}`}>Next Page</Link> : null}
    </div>
  );
}
