import React, {
  MutableRefObject,
  RefObject,
  useRef,
  useState,
  useEffect,
} from 'react';
import TopicsLinks from './TopicsLinks';

export default function TopicsNav() {
  const [topicsMenu, setTopicsMenu] = useState(false);

  const ref = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  // Detect outside component click
  // const useOutsideClick = (
  //   ref: RefObject<HTMLElement>,
  //   callback: () => void
  // ) => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   const handleClick = (e: MouseEvent) => {
  //     console.log(e)
  //     console.log(ref)
  //     if (ref.current && !ref.current.contains(e.target as Node)) {
  //       callback();
  //     }
  //   };
  //   useEffect(() => {
  //     document.addEventListener('click', handleClick);

  //     return () => {
  //       document.removeEventListener('click', handleClick);
  //     };
  //   }, [handleClick]);
  // };

  // useOutsideClick(ref, () => {
  //   if (topicsMenu) {
  //     setTopicsMenu(false);
  //   }
  // });

  return (
    <div className='relative' ref={ref}>
      {/* Nav Link */}
      <li className='flex flex-row'>
        <a href='#' className='flex' onClick={() => setTopicsMenu(!topicsMenu)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
            />
          </svg>
          <p className='ml-2 mr-2'>Topics</p>
          {topicsMenu ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 15.75l7.5-7.5 7.5 7.5'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          )}
        </a>
      </li>
      {/* Nav Menu */}
      <div
        className={`${
          topicsMenu
            ? 'z-50 w-64 origin-top bg-white pt-2 lg:absolute'
            : 'hidden'
        }`}
      >
        <TopicsLinks setTopicsMenu={setTopicsMenu as () => void} />
      </div>
    </div>
  );
}
