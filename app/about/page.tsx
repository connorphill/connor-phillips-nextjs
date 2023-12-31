import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Connor Phillips',
  alternates: {
    canonical: `/about/`,
  },
  openGraph: {
    url: '/about/',
    title: 'About | Connor Phillips',
  },
  twitter: {
    title: 'About | Connor Phillips',
  },
};

export default async function About() {
  return (
    <div className='container mx-auto'>
      <div className='py-10' id='introduction'>
        <h1 className='text-3xl font-semibold text-midnight-500 lg:text-5xl'>
          About
        </h1>
        <div className='py-3'>
          <p className='py-2'>
            Data leader with over a decade of startup and agency experience
            helping B2C and B2B businesses with their mobile app and web-based
            products.
          </p>
          <p className='py-2'>
            I have led a wide range of marketing analytics initiatives including
            measurement, strategy, data architecture, and forecasting for both
            mobile and web-based products.
          </p>
          <p className='py-2'>
            Currently, I lead the US Analytics team at the growth marketing
            agency,
            <a
              href='https://twigeo.com/'
              className='text-gold-600 hover:text-gold-700'
            >
              &nbsp;Twigeo
            </a>
            , working with growth-focused clients ranging in industries from
            ride share to language learning.
          </p>
          <p className='py-2'>
            Prior to Twigeo, I helped establish and lead marketing and sales
            analytics at ShopKeep, which was acquired by
            <a
              href='https://www.lightspeedhq.com/'
              className='text-gold-600 hover:text-gold-700'
            >
              &nbsp;Lightspeed Commerce
            </a>
            (NYSE: LSPD) in 2020.
          </p>
          <p className='py-2'>
            Outside of my passion for all things data, I am an avid runner,
            photographer and love working on side projects to learn new software
            development languages.
          </p>
          <div className='mt-5 border-2 border-solid border-gold-500 p-2'>
            <h2 className='pt-3 text-3xl text-gold-500'>Highlights</h2>
            <ul className='list-disc space-y-3 px-4 py-5'>
              <li>
                Helped establish and lead Marketing &amp; Sales Analytics for
                ShopKeep to its first EBITDA positive year in the decade of the
                business being in operation
              </li>
              <li>
                Designed and executed various tests (GeoX, Conversion Lift,
                etc.) to prove the incrementality of marketing campaigns.
              </li>
              <li>
                Developed analytics solutions like a proprietary lead scoring
                algorithm and multi-touch attribution model using platforms
                including Postgresql, Looker, Google Tag Manager, and
                Salesforce.
              </li>
              <li>
                Developed ML models for purposes like time series forecasting
                and customer segmentation
              </li>
              <li>
                Programmed an internal data annotation tracking solution to
                track and understand trends in reports
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='py-3' id='skills'>
        <h2 className='text-5xl text-midnight-400'>Skills</h2>
        <div className='mt-5 flex flex-col justify-around space-y-5 md:space-x-4 md:space-y-0 lg:flex-row'>
          <div className='flex flex-col border-2 border-solid border-midnight-500 px-3 py-2'>
            <h3 className='flex items-center text-2xl '>
              <svg
                width='512'
                height='512'
                viewBox='0 0 48 48'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2 h-6 w-6'
              >
                <mask id='ipSData0'>
                  <g
                    fill='none'
                    stroke='#fff'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='4'
                  >
                    <path d='M44 11v27c0 3.314-8.954 6-20 6S4 41.314 4 38V11' />
                    <path d='M44 29c0 3.314-8.954 6-20 6S4 32.314 4 29m40-9c0 3.314-8.954 6-20 6S4 23.314 4 20' />
                    <ellipse cx='24' cy='10' fill='#fff' rx='20' ry='6' />
                  </g>
                </mask>
                <path fill='#000000' d='M0 0h48v48H0z' mask='url(#ipSData0)' />
              </svg>
              Data
            </h3>
            <div className='flex py-3'>
              <ul className='space-y-4'>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M14.25 2.1a1.25 1.25 0 0 0-1.17-.1L6.91 4.43a1.22 1.22 0 0 1-.46.09H2.5a1.25 1.25 0 0 0-1.25 1.25v.1H0v3h1.25V9a1.25 1.25 0 0 0 1.25 1.22L4 13.4a1.26 1.26 0 0 0 1.13.72h.63A1.25 1.25 0 0 0 7 12.87v-2.53l6.08 2.43a1.27 1.27 0 0 0 .47.09a1.29 1.29 0 0 0 .7-.22a1.25 1.25 0 0 0 .55-1V3.13a1.25 1.25 0 0 0-.55-1.03zm-8.5 3.67V9H2.5V5.77zm0 7.1h-.63l-1.23-2.65h1.86zm1.62-3.72A2.29 2.29 0 0 0 7 9V5.7a2.26 2.26 0 0 0 .37-.11l6.18-2.46v8.48zm7.46-3.03v2.5a1.25 1.25 0 0 0 0-2.5z'
                    />
                  </svg>
                  Marketing Analytics
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <g fill='#000000' fillRule='evenodd' clipRule='evenodd'>
                      <path d='M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z' />
                      <path d='M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0Zm11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.469 3.469 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0Z' />
                      <path d='M14 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5Z' />
                      <path d='M9.5 11.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z' />
                    </g>
                  </svg>
                  Sales Analytics
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 48 48'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <g fill='none'>
                      <rect
                        width='40'
                        height='32'
                        x='4'
                        y='8'
                        stroke='#000000'
                        strokeLinejoin='round'
                        strokeWidth='4'
                        rx='3'
                      />
                      <path
                        stroke='#000000'
                        strokeWidth='4'
                        d='M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4v-9Z'
                      />
                      <circle
                        r='2'
                        fill='#000000'
                        transform='matrix(0 -1 -1 0 10 14)'
                      />
                      <circle
                        r='2'
                        fill='#000000'
                        transform='matrix(0 -1 -1 0 16 14)'
                      />
                    </g>
                  </svg>
                  Web Analytics
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M11 4C9.355 4 8 5.355 8 7v18c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V7c0-1.645-1.355-3-3-3zm0 2h10c.555 0 1 .445 1 1v18c0 .555-.445 1-1 1H11c-.555 0-1-.445-1-1V7c0-.555.445-1 1-1zm5 17c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1z'
                    />
                  </svg>
                  Mobile App Analytics
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 36 36'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M32 13.22V29H4V7h18.57a7.447 7.447 0 0 1-.07-1c.001-.335.024-.669.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34c-.62.39-1.294.686-2 .88Z'
                      className='clr-i-outline--badged clr-i-outline-path-1--badged'
                    />
                    <path
                      fill='#000000'
                      d='m15.62 15.222l-6.018 8.746l-4.052-3.584l1.06-1.198l2.698 2.386l6.326-9.192l6.75 10.015l6.754-8.925l1.276.966l-8.106 10.709z'
                      className='clr-i-outline--badged clr-i-outline-path-2--badged'
                    />
                    <circle
                      cx='30'
                      cy='6'
                      r='5'
                      fill='#000000'
                      className='clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge'
                    />
                    <path fill='none' d='M0 0h36v36H0z' />
                  </svg>
                  Analytics Engineering
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 256 256'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <g
                      id='galaData0'
                      fill='none'
                      stroke='#000000'
                      strokeDasharray='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeMiterlimit='4'
                      strokeWidth='16'
                    >
                      <path
                        id='galaData1'
                        d='M 239.98507,55.993592 A 111.98507,39.994664 0 0 1 128,95.988256 111.98507,39.994664 0 0 1 16.01493,55.993592 111.98507,39.994664 0 0 1 128,15.998927 111.98507,39.994664 0 0 1 239.98507,55.993592 Z'
                      />
                      <path
                        id='galaData2'
                        d='m 239.98507,199.97441 a 111.98507,39.994664 0 0 1 -55.99253,34.63639 111.98507,39.994664 0 0 1 -111.985079,0 111.98507,39.994664 0 0 1 -55.992531,-34.6364'
                      />
                      <path
                        id='galaData3'
                        d='m 239.98507,151.9808 a 111.98507,39.994664 0 0 1 -55.99253,34.6364 111.98507,39.994664 0 0 1 -111.985079,-1e-5 A 111.98507,39.994664 0 0 1 16.01493,151.9808'
                      />
                      <path
                        id='galaData4'
                        d='m 239.98507,103.9872 a 111.98507,39.994664 0 0 1 -55.99253,34.6364 111.98507,39.994664 0 0 1 -111.985079,0 111.98507,39.994664 0 0 1 -55.992531,-34.6364'
                      />
                      <path
                        id='galaData5'
                        strokeOpacity='1'
                        d='M 16.01493,55.99377 V 199.97441'
                      />
                      <path
                        id='galaData6'
                        strokeOpacity='1'
                        d='M 239.98507,55.993592 V 199.97441'
                      />
                    </g>
                  </svg>
                  Data Engineering
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M5 21q-1.275 0-1.813-1.137t.263-2.113L9 11V5H8q-.425 0-.713-.288T7 4q0-.425.288-.713T8 3h8q.425 0 .713.288T17 4q0 .425-.288.713T16 5h-1v6l5.55 6.75q.8.975.263 2.113T19 21H5Zm0-2h14l-6-7.3V5h-2v6.7L5 19Zm7-7Z'
                    />
                  </svg>
                  Data Science
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col border-2 border-solid border-midnight-500 px-3 py-2'>
            <h3 className='flex items-center text-2xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='mr-2 h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09'
                />
              </svg>
              Marketing Science
            </h3>
            <div className='flex py-3'>
              <ul className='space-y-4'>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M6 8a2 2 0 0 0 1.732-1H14a2 2 0 1 1 0 4h-4a4 4 0 0 0 0 8h6.268A2 2 0 0 0 20 18a2 2 0 0 0-3.732-1H10a2 2 0 1 1 0-4h4a4 4 0 0 0 0-8H7.732A2 2 0 1 0 6 8Z'
                    />
                  </svg>
                  Multi-touch Attribution Modeling (MTA)
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm4-8.5l4 4l6-6V5H5v11.5l4-4Zm3-.5V6h1.5v6H12Zm3.5 0l-2-3l2-3h1.7l-2 3l2 3h-1.7ZM7 12V8.25h2.5V7.5H7V6h4v3.75H8.5v.75H11V12H7Zm2 3l-4 4h14v-6l-6 6l-4-4Zm-4 4V5v14Z'
                    />
                  </svg>
                  Lead Scoring
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 256 256'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm-26.37 144h52.74C149 186.34 140 202.87 128 215.89c-12-13.02-21-29.55-26.37-47.89ZM98 152a145.72 145.72 0 0 1 0-48h60a145.72 145.72 0 0 1 0 48Zm-58-24a87.61 87.61 0 0 1 3.33-24h38.46a161.79 161.79 0 0 0 0 48H43.33A87.61 87.61 0 0 1 40 128Zm114.37-40h-52.74C107 69.66 116 53.13 128 40.11c12 13.02 21 29.55 26.37 47.89Zm19.84 16h38.46a88.15 88.15 0 0 1 0 48h-38.46a161.79 161.79 0 0 0 0-48Zm32.16-16h-35.43a142.39 142.39 0 0 0-20.26-45a88.37 88.37 0 0 1 55.69 45ZM105.32 43a142.39 142.39 0 0 0-20.26 45H49.63a88.37 88.37 0 0 1 55.69-45ZM49.63 168h35.43a142.39 142.39 0 0 0 20.26 45a88.37 88.37 0 0 1-55.69-45Zm101.05 45a142.39 142.39 0 0 0 20.26-45h35.43a88.37 88.37 0 0 1-55.69 45Z'
                    />
                  </svg>
                  Incrementality Testing (GeoX)
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M4 20V9h4v11H4Zm6 0V4h4v16h-4Zm6 0v-7h4v7h-4Z'
                    />
                  </svg>
                  Marketing Mix Modeling (MMM)
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 256 256'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v94.37L90.73 98a8 8 0 0 1 10.07-.38l58.81 44.11L218.73 90a8 8 0 1 1 10.54 12l-64 56a8 8 0 0 1-10.07.38l-58.81-44.09L40 163.63V200h184a8 8 0 0 1 8 8Z'
                    />
                  </svg>
                  Time-Series Forecasting
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='none'
                      stroke='#000000'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 5h-7L8 19l-3-6H3m11 0l6 6m-6 0l6-6'
                    />
                  </svg>
                  Frequentist and Bayesian Statistics
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col border-2 border-solid border-midnight-500 px-3 py-2'>
            <h3 className='flex items-center text-2xl'>
              <svg
                width='512'
                height='512'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2 h-6 w-6'
              >
                <path
                  fill='#000000'
                  d='M21.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 6h-5a1 1 0 0 0 0 2h2.59L13 13.59l-3.29-3.3a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 12.41l3.29 3.3a1 1 0 0 0 1.42 0L20 9.41V12a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38Z'
                />
              </svg>
              Growth
            </h3>
            <div className='flex py-3'>
              <ul className='space-y-4'>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='m14 22l-6-3.5v-7l3.5-2.05v6.05h5V9.45L20 11.5v7L14 22ZM5.5 11L2 9V5l3.5-2L9 5v4l-3.5 2Zm7.5 3V2h9l-2 3l2 3h-7v6h-2Z'
                    />
                  </svg>
                  GTM Strategy
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M15.989 1.396h.032c1.197 0 2.307.401 3.197 1.073h.005a5.348 5.348 0 0 1 1.489 1.733l5.953 10.36l.036.083l4.557 7.907c.485.817.74 1.755.74 2.713c0 .751-.156 1.469-.437 2.12l.005.021a5.21 5.21 0 0 1-.844 1.328a5.332 5.332 0 0 1-1.396 1.156a5.265 5.265 0 0 1-2.593.713h-.089a5.285 5.285 0 0 1-3.197-1.073h-.005a5.348 5.348 0 0 1-1.489-1.733L16 17.437l-.036-.083l-4.579-7.943a5.316 5.316 0 0 1-.719-2.677c0-.563.088-1.109.251-1.62l.009-.032l.016-.041c.068-.208.156-.448.156-.448a5.16 5.16 0 0 1 .833-1.312l.084-.099l.02-.021v-.005h.005l.011-.016l.011-.004a5.282 5.282 0 0 1 1.276-1.027a5.265 5.265 0 0 1 2.593-.713zM5.344 30.604h-.079a5.28 5.28 0 0 1-2.593-.713c-.532-.303-1-.697-1.396-1.156a5.21 5.21 0 0 1-.844-1.328l.005-.021A5.288 5.288 0 0 1 0 25.266c0-.995.271-1.921.74-2.713l4.557-7.907l.036-.083l4.052-7.047c.099.859.364 1.703.792 2.473l.077.131l4.5 7.807v-.015l.089.192l.385.677l-5.183 9.016a5.35 5.35 0 0 1-1.489 1.733h-.005a5.279 5.279 0 0 1-3.197 1.073z'
                    />
                  </svg>
                  Paid Search
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M20.26 7.8a4.82 4.82 0 0 0-3.93-2.44a3.91 3.91 0 0 0-2.54 1.09a10.58 10.58 0 0 0-1.52 1.71a11 11 0 0 0-1.63-1.72a4.39 4.39 0 0 0-2.88-1.08A5 5 0 0 0 3.7 8A11.49 11.49 0 0 0 2 14a7 7 0 0 0 .18 1.64A4.44 4.44 0 0 0 2.71 17a3.23 3.23 0 0 0 3 1.6c1.25 0 2.19-.56 3.3-2a26.4 26.4 0 0 0 2.21-3.6l.63-1.12c.06-.09.11-.18.16-.27l.15.25l1.79 3A14.77 14.77 0 0 0 16 17.63a3.38 3.38 0 0 0 2.55 1a3 3 0 0 0 2.54-1.23a2.2 2.2 0 0 0 .18-.28a4.1 4.1 0 0 0 .31-.63l.12-.35A6.53 6.53 0 0 0 22 15a9 9 0 0 0 0-1a11.15 11.15 0 0 0-1.74-6.2zm-10.12 3.56c-.64 1-1.57 2.51-2.37 3.61c-1 1.37-1.51 1.51-2.07 1.51a1.29 1.29 0 0 1-1.15-.66a3.3 3.3 0 0 1-.39-1.7A9.74 9.74 0 0 1 5.54 9a2.8 2.8 0 0 1 2.19-1.47A3 3 0 0 1 10 8.74a14.07 14.07 0 0 1 1 1.31zm8.42 5.12c-.48 0-.85-.19-1.38-.83A34.87 34.87 0 0 1 14.82 12l-.52-.86c-.36-.61-.71-1.16-1-1.65a2.46 2.46 0 0 1 .17-.27c.94-1.39 1.77-2.17 2.8-2.17a3.12 3.12 0 0 1 2.49 1.66a10.17 10.17 0 0 1 1.37 5.34c-.04 1.31-.34 2.43-1.57 2.43z'
                    />
                  </svg>
                  Social Paid
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M4 2a2 2 0 0 0-2 2v8h2V8h2v4h2V4a2 2 0 0 0-2-2H4m0 2h2v2H4m18 9.5V14a2 2 0 0 0-2-2h-4v10h4a2 2 0 0 0 2-2v-1.5a1.54 1.54 0 0 0-1.5-1.5a1.54 1.54 0 0 0 1.5-1.5M20 20h-2v-2h2v2m0-4h-2v-2h2M5.79 21.61l-1.58-1.22l14-18l1.58 1.22Z'
                    />
                  </svg>
                  A/B Testing
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='none'
                      stroke='#000000'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M7 8H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3m11 0h-4V8h4m-3 4h2m4-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z'
                    />
                  </svg>
                  SEO
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col border-2 border-solid border-midnight-500 px-3 py-2'>
            <h3 className='flex items-center text-2xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='mr-2 h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z'
                />
              </svg>
              Software Development
            </h3>
            <div className='flex py-3'>
              <ul className='space-y-4'>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M9 5h1V3H9v2m0 8h1v-2H9v2m0 8h1v-2H9v2M5 3v2h2V3H5m0 8v2h2v-2H5m0 8v2h2v-2H5Z'
                    />
                  </svg>
                  Full-stack development
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 128 128'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M108.59 26.148c-1.852 0-3.622.211-5.305.715c-1.684.504-3.117 1.223-4.379 2.188a10.829 10.829 0 0 0-3.031 3.453c-.757 1.348-1.137 2.906-1.137 4.676c0 2.187.716 4.25 2.106 6.105c1.386 1.895 3.66 3.324 6.734 4.293l6.106 1.895c2.062.675 3.496 1.391 4.254 2.191c.757.801 1.136 1.765 1.136 2.945c0 1.726-.758 3.074-2.191 4c-1.43.925-3.492 1.391-6.145 1.391c-1.687 0-3.328-.168-5.011-.504a23.102 23.102 0 0 1-4.633-1.476c-.421-.168-.801-.336-1.051-.418a2.357 2.357 0 0 0-.758-.13c-.634 0-.969.423-.969 1.305v2.149a2.919 2.919 0 0 0 .254 1.18c.168.38.629.8 1.305 1.18c1.094.628 2.734 1.179 4.84 1.683c2.105.504 4.297.758 6.484.758c2.15 0 4.129-.297 6.024-.883c1.808-.551 3.367-1.309 4.672-2.36c1.304-1.01 2.316-2.273 3.074-3.707c.714-1.429 1.094-3.07 1.094-4.882c0-2.188-.633-4.168-1.938-5.895c-1.304-1.727-3.491-3.074-6.523-4.043l-5.98-1.895c-2.23-.713-3.79-1.516-4.634-2.316c-.84-.797-1.261-1.808-1.261-2.988c0-1.726.671-2.95 1.98-3.746c1.305-.801 3.199-1.18 5.598-1.18c2.988 0 5.683.547 8.086 1.64c.714.337 1.261.508 1.597.508c.633 0 .969-.463.969-1.347v-1.98c0-.59-.125-1.051-.379-1.391c-.25-.378-.672-.715-1.262-1.051c-.422-.254-1.011-.504-1.77-.758a32.528 32.528 0 0 0-2.398-.676c-.886-.168-1.769-.336-2.738-.46a21.347 21.347 0 0 0-2.82-.169zm-86.822.082c-2.316 0-4.508.254-6.57.801c-2.063.505-3.831 1.137-5.303 1.895c-.59.297-.97.59-1.18.883c-.211.296-.293.8-.293 1.476v2.063c0 .882.293 1.304.883 1.304c.168 0 .378-.043.674-.125c.293-.086.796-.254 1.472-.547a33.416 33.416 0 0 1 4.547-1.433A19.176 19.176 0 0 1 20.547 32c3.242 0 5.513.633 6.863 1.938c1.304 1.303 1.98 3.534 1.98 6.734v3.074c-1.683-.379-3.283-.715-4.843-.926c-1.558-.21-3.031-.336-4.461-.336c-4.34 0-7.75 1.094-10.316 3.286c-2.571 2.187-3.832 5.093-3.832 8.671c0 3.368 1.05 6.063 3.113 8.086c2.066 2.02 4.887 3.032 8.422 3.032c4.97 0 9.097-1.938 12.379-5.813a34.153 34.153 0 0 0 1.304 2.484a13.28 13.28 0 0 0 1.516 1.98c.422.38.844.59 1.266.59c.334 0 .714-.128 1.093-.378l2.653-1.77c.546-.42.8-.843.8-1.261a1.86 1.86 0 0 0-.293-.97a22.469 22.469 0 0 1-1.347-3.03c-.297-.925-.465-2.19-.465-3.75h-.086V40c0-4.633-1.176-8.086-3.492-10.36c-2.36-2.273-6.025-3.41-11.033-3.41zm19.58 1.012c-.676 0-1.012.379-1.012 1.051c0 .297.129.844.379 1.687l9.894 32.547c.254.8.547 1.387.887 1.641c.336.297.84.422 1.598.422h3.62c.759 0 1.347-.125 1.684-.422c.34-.293.591-.84.801-1.684l6.485-27.117l6.527 27.16c.168.84.46 1.387.8 1.684c.337.292.883.422 1.684.422h3.621c.715 0 1.262-.167 1.598-.422c.34-.253.633-.8.887-1.64L90.949 30.02c.168-.46.25-.797.293-1.051c.043-.254.086-.466.086-.676c0-.715-.379-1.05-1.055-1.05H86.36c-.757 0-1.308.166-1.644.421c-.293.25-.59.8-.84 1.64L76.59 57.517l-6.653-28.211c-.166-.8-.464-1.39-.8-1.64c-.336-.298-.884-.423-1.684-.423h-3.367c-.758 0-1.348.167-1.688.422c-.335.25-.588.8-.796 1.64l-6.57 27.876l-7.075-27.875c-.25-.8-.504-1.39-.84-1.64c-.297-.298-.844-.423-1.644-.423h-4.125zM21.64 47.496a31.816 31.816 0 0 1 3.96.25a34.401 34.401 0 0 1 3.872.719v1.765c0 1.435-.168 2.653-.422 3.665c-.25 1.01-.758 1.895-1.43 2.695c-1.137 1.262-2.484 2.187-4 2.695c-1.516.504-2.949.758-4.336.758c-1.937 0-3.41-.508-4.422-1.559c-1.054-1.01-1.558-2.484-1.558-4.464c0-2.106.675-3.704 2.062-4.84c1.391-1.137 3.454-1.684 6.274-1.684zM118 73.348c-4.432.063-9.664 1.052-13.621 3.832c-1.223.883-1.012 2.062.336 1.894c4.508-.547 14.44-1.726 16.21.547c1.77 2.23-1.976 11.62-3.663 15.79c-.504 1.26.59 1.769 1.726.8c7.41-6.231 9.348-19.242 7.832-21.137c-.757-.925-4.388-1.79-8.82-1.726zM1.63 75.859c-.926.116-1.347 1.236-.368 2.121c16.508 14.902 38.359 23.872 62.613 23.872c17.305 0 37.43-5.43 51.281-15.66c2.273-1.689.298-4.254-2.02-3.204c-15.533 6.57-32.421 9.77-47.788 9.77c-22.778 0-44.8-6.273-62.653-16.633c-.39-.231-.755-.304-1.064-.266z'
                    />
                  </svg>
                  Amazon Web Services (AWS)
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 128 128'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <g fill='#000000'>
                      <path d='M80.6 40.3h.4l-.2-.2l14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5C36.5 20.8 24.9 32.8 20.7 48c.2-.1.5-.2.8-.2c5.2-3.4 11.4-5.4 17.9-5.4c2.2 0 4.3.2 6.4.6c.1-.1.2-.1.3-.1c9-9.9 24.2-11.1 34.6-2.6h-.1z' />
                      <path d='M108.1 47.8c-2.3-8.5-7.1-16.2-13.8-22.1L80 39.9c6 4.9 9.5 12.3 9.3 20v2.5c16.9 0 16.9 25.2 0 25.2H63.9v20h-.1l.1.2h25.4c14.6.1 27.5-9.3 31.8-23.1c4.3-13.8-1-28.8-13-36.9z' />
                      <path d='M39 107.9h26.3V87.7H39c-1.9 0-3.7-.4-5.4-1.1l-15.2 14.6v.2c6 4.3 13.2 6.6 20.7 6.6z' />
                      <path d='M40.2 41.9c-14.9.1-28.1 9.3-32.9 22.8c-4.8 13.6 0 28.5 11.8 37.3l15.6-14.9c-8.6-3.7-10.6-14.5-4-20.8c6.6-6.4 17.8-4.4 21.7 3.8L68 55.2C61.4 46.9 51.1 42 40.2 42.1z' />
                    </g>
                  </svg>
                  Google Cloud (GCP)
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M27 2H5C3.344 2 2 3.344 2 5v22c0 1.656 1.344 3 3 3h22c1.656 0 3-1.344 3-3V5c0-1.656-1.344-3-3-3zM9.938 24.031a1.248 1.248 0 1 1-2.162-1.25l.894-1.544c1.006-.306 1.831-.069 2.475.712zm8.681-3.368H7.25c-.688 0-1.25-.563-1.25-1.25s.563-1.25 1.25-1.25h3.188l4.087-7.075l-1.281-2.212A1.252 1.252 0 0 1 13.7 7.17a1.252 1.252 0 0 1 1.706.456l.556.962l.556-.962a1.248 1.248 0 1 1 2.162 1.25l-5.362 9.288h3.881c1.262 0 1.969 1.481 1.419 2.5zm6.131 0h-1.813l1.225 2.119c.344.6.137 1.363-.456 1.706c-.6.344-1.363.137-1.706-.456c-2.056-3.556-3.594-6.231-4.625-8.006c-1.044-1.813-.3-3.625.444-4.237c.819 1.419 2.044 3.544 3.681 6.375h3.25a1.25 1.25 0 1 1 0 2.5z'
                    />
                  </svg>
                  React Native Development
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col border-2 border-solid border-midnight-500 px-3 py-2'>
            <h3 className='flex items-center text-2xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='mr-2 h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z'
                />
              </svg>
              Programming Lanugages
            </h3>
            <div className='flex py-3'>
              <ul className='space-y-4'>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 128 128'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M112.678 30.334L68.535 4.729c-2.781-1.584-6.424-1.584-9.227 0L14.82 30.334C11.951 31.985 10 35.088 10 38.407v51.142c0 3.319 1.992 6.423 4.862 8.083l11.729 6.688c5.627 2.772 7.186 2.772 9.746 2.772c8.334 0 12.662-5.039 12.662-13.828v-50.49C49 42.061 49.445 41 48.744 41h-5.622C42.41 41 41 42.061 41 42.773v50.49c0 3.896-3.616 7.773-10.202 4.48L18.676 90.73c-.422-.23-.676-.693-.676-1.181V38.407c0-.482.463-.966.891-1.213l44.378-25.561a1.508 1.508 0 0 1 1.415 0l43.963 25.555c.421.253.354.722.354 1.219v51.142c0 .488.092.963-.323 1.198l-44.133 25.576c-.378.227-.87.227-1.285 0l-11.317-6.749c-.341-.198-.752-.269-1.08-.086c-3.145 1.783-3.729 2.02-6.679 3.043c-.727.253-1.799.692.408 1.929l14.798 8.754a9.29 9.29 0 0 0 4.647 1.246a9.303 9.303 0 0 0 4.666-1.246l43.976-25.582c2.871-1.672 4.322-4.764 4.322-8.083V38.407c-.001-3.319-1.452-6.414-4.323-8.073zM77.727 81.445c-11.727 0-14.309-3.235-15.17-9.066c-.102-.628-.634-1.379-1.274-1.379h-5.73c-.709 0-1.28.86-1.28 1.566c0 7.466 4.06 16.512 23.454 16.512c14.038 0 22.088-5.455 22.088-15.109c0-9.572-6.467-12.084-20.082-13.886c-13.762-1.819-15.16-2.738-15.16-5.962c0-2.658 1.184-6.203 11.374-6.203c9.104 0 12.46 1.954 13.841 8.091c.119.577.646.991 1.241.991h5.754c.354 0 .691-.143.939-.396c.241-.272.367-.613.336-.979c-.893-10.569-7.913-15.494-22.112-15.494c-12.632 0-20.166 5.334-20.166 14.275c0 9.698 7.497 12.378 19.622 13.577c14.505 1.422 15.633 3.542 15.633 6.395c0 4.956-3.978 7.067-13.308 7.067z'
                    />
                  </svg>
                  Node.js
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 128 128'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176c-5.014-.835-10.195-1.215-15.187-1.191c-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811c-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545c0-3.079 2.451-5.581 5.478-5.581c3.015 0 5.479 2.502 5.479 5.581c-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834c9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66c3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547c0 3.076-2.451 5.579-5.479 5.579c-3.015 0-5.478-2.502-5.478-5.579c0-3.068 2.463-5.547 5.478-5.547z'
                    />
                  </svg>
                  Python
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 128 128'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      d='M64 8.25c-3.465.008-6.93.164-10.383.477a99.14 99.14 0 0 0-6.27.773c-1.874.305-3.738.68-5.585 1.125c-1.602.39-3.188.86-4.75 1.398c-.676.25-1.348.52-2.012.813c-.871.383-1.715.824-2.531 1.316c-.242.145-.477.301-.711.461a8.93 8.93 0 0 0-2.035 1.969a4.713 4.713 0 0 0-.532 1.047a3.53 3.53 0 0 0-.148 1.535c.047.32.133.629.262.926c.14.312.316.61.527.879c.36.472.77.902 1.223 1.281a12.48 12.48 0 0 0 2.418 1.602a23.158 23.158 0 0 0 3.218 1.421c-.117.036-.234.075-.355.114a81.115 81.115 0 0 0 6.758 1.847c2.281.524 4.586.946 6.906 1.266c2.316.324 4.648.547 6.988.668a78.84 78.84 0 0 0 7.012.05c2.273.063 4.55.028 6.82-.105a80.66 80.66 0 0 0 6.778-.71c.468-.06.922-.13 1.37-.192c.61-.09 1.216-.184 1.821-.285a57.39 57.39 0 0 0 3.89-.746a55.06 55.06 0 0 0 6.63-1.899c.89-.34 1.77-.715 2.629-1.133a19.913 19.913 0 0 0 2.148-1.242a11.382 11.382 0 0 0 1.578-1.324c.39-.418.727-.89.988-1.402c.211-.461.325-.961.336-1.47a3.26 3.26 0 0 0-.406-1.585a4.68 4.68 0 0 0-.71-1.027a9.27 9.27 0 0 0-1.024-.973a10.43 10.43 0 0 0-.614-.484a14.733 14.733 0 0 0-1.484-.903a22.605 22.605 0 0 0-3.77-1.683a53.427 53.427 0 0 0-7.453-2.016a78.118 78.118 0 0 0-5.93-.973a97.165 97.165 0 0 0-6.558-.609c-2.344-.145-4.691-.21-7.039-.207ZM18.418 20.055v87.89c0 9.032 20.055 16.356 44.941 16.5H64c25.172 0 45.582-7.113 45.582-16.5v-87.89c0 9.172-20.41 16.496-45.582 16.496s-45.582-7.11-45.582-16.496Zm22.117 36.48c2.422-.097 4.836.29 7.11 1.137v6.113a11.533 11.533 0 0 0-7.11-2.062a4.847 4.847 0 0 0-2.988.855a2.418 2.418 0 0 0-1.067 2.133a3.13 3.13 0 0 0 .852 2.277a13.064 13.064 0 0 0 3.629 2.203a17.225 17.225 0 0 1 5.902 4.055a7.458 7.458 0 0 1 1.778 4.977a7.681 7.681 0 0 1-2.348 6.468a13.364 13.364 0 0 1-8.39 2.348a15.411 15.411 0 0 1-7.61-1.707v-6.613a11.801 11.801 0 0 0 7.75 2.988a5.786 5.786 0 0 0 3.203-.781a2.712 2.712 0 0 0 1.137-2.207a2.982 2.982 0 0 0-1.067-2.274a20.558 20.558 0 0 0-4.41-2.562c-4.836-2.133-7.11-4.977-7.11-8.602a7.68 7.68 0 0 1 2.985-6.332a11.67 11.67 0 0 1 7.754-2.414Zm25.598.281a14.228 14.228 0 0 1 7.113 1.852A12.87 12.87 0 0 1 78.223 64a16.509 16.509 0 0 1 2.347 7.54a16.634 16.634 0 0 1-2.347 8.956a12.736 12.736 0 0 1-7.114 5.406l8.75 7.82h-8.605l-6.117-7.109a14.679 14.679 0 0 1-7.11-2.133a12.526 12.526 0 0 1-4.906-5.261a16.06 16.06 0 0 1-1.707-7.114A17.48 17.48 0 0 1 53.262 64a13.217 13.217 0 0 1 5.191-5.262a15.015 15.015 0 0 1 7.68-1.922Zm19.199.075h6.402v24.175h11.094v5.192H85.332Zm-19.484 4.906a7.104 7.104 0 0 0-5.547 2.629a10.903 10.903 0 0 0-2.063 7.113a10.842 10.842 0 0 0 2.063 7.11a6.538 6.538 0 0 0 5.406 2.558a6.673 6.673 0 0 0 5.402-2.488a10.355 10.355 0 0 0 1.993-7.18c.156-2.52-.52-5.016-1.918-7.113a6.181 6.181 0 0 0-5.336-2.63Zm0 0'
                    />
                  </svg>
                  SQL
                </li>
                <li className='flex'>
                  <svg
                    width='512'
                    height='512'
                    viewBox='0 0 128 128'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      fill='#000000'
                      fillRule='evenodd'
                      d='M63.409 100.219c1.792 1.482 3.893 2.114 6.161 2.231c.938.049 1.903.003 2.826-.165c1.464-.266 2.924-.6 4.348-1.029c2.9-.875 5.406-2.387 7.277-4.829c1.066-1.392 1.941-2.897 2.503-4.561c.464-1.373.9-2.76 1.247-4.165c.274-1.107.41-2.25.576-3.381c.111-.748.178-1.504.247-2.259c.112-1.225.229-2.448.31-3.676c.057-.854.055-1.712.088-2.567c.011-.261.053-.52.078-.779c.021-.241.143-.324.389-.32c.864.013 1.73.035 2.593-.004c.967-.043 1.941-.085 2.893-.244a46.368 46.368 0 0 0 4.028-.86c1.568-.411 3.007-1.146 4.393-1.982c1.612-.975 3.084-2.118 4.275-3.591c1.039-1.282 1.531-2.768 1.28-4.389c-.364-2.355-2.343-3.898-4.644-4.003c-.834-.038-1.68.05-2.51.155c-1.005.128-1.995.354-2.997.503c-.692.104-1.393.15-2.083.222l-.019-.09c1.29-2.437 2.634-4.846 3.854-7.316c.937-1.896 1.737-3.859 2.564-5.809c1.37-3.228 2.463-6.555 3.369-9.938c.867-3.238 1.609-6.511 1.844-9.871c.094-1.341.159-2.688.15-4.031c-.006-1.072-.122-2.145-.229-3.213c-.122-1.224-.492-2.384-1.004-3.5c-.674-1.472-1.721-2.679-2.822-3.825c-.881-.918-1.851-1.754-2.812-2.59c-1.371-1.192-2.913-2.145-4.513-2.99a26.013 26.013 0 0 0-5.724-2.22a71.525 71.525 0 0 0-3.658-.821C87.251 4.224 86.811 4 86.372 4h-8.268c-.299 0-.595.196-.896.229a31.429 31.429 0 0 0-5.835 1.205c-.71.219-1.358.091-2.033.028c-.518-.048-1.027-.181-1.545-.207c-1.971-.098-3.944-.24-5.916-.219c-1.888.02-3.757.332-5.584.85c-1.529.436-3.026.965-4.398 1.77c-.586.344-1.052.279-1.659.105a104.514 104.514 0 0 0-6.166-1.604c-1.291-.289-2.62-.435-3.939-.571a46.155 46.155 0 0 0-3.809-.237c-1.242-.027-2.492-.026-3.729.084c-1.969.175-3.9.575-5.778 1.221a19.252 19.252 0 0 0-5.72 3.121c-1.75 1.385-3.154 3.074-4.281 5.005c-1.189 2.037-2.006 4.218-2.512 6.507c-.275 1.241-.174 2.517-.363 3.777c-.058.39.059.782.059 1.174v5.485c0 .364-.107.729-.061 1.095c.113.879.074 1.765.223 2.638c.234 1.382.445 2.759.729 4.131c.397 1.917.776 3.832 1.216 5.74c.32 1.389.667 2.77 1.048 4.143c.58 2.098 1.146 4.199 1.803 6.272c.611 1.927 1.307 3.826 2.002 5.726a50.846 50.846 0 0 0 3.49 7.607c1.195 2.111 2.558 4.088 4.388 5.713c1.207 1.072 2.548 1.895 4.109 2.307a8.13 8.13 0 0 0 3.733.104a8.864 8.864 0 0 0 3.895-1.865c.132-.107.275-.19.432.008c.594.752 1.388 1.254 2.219 1.687c2.242 1.17 4.685 1.521 7.166 1.663c.602.034 1.208-.052 1.813-.068c1.181-.033 2.327-.263 3.454-.589c.592-.171 1.169-.389 1.771-.591c.031.641.071 1.257.091 1.874l.083 3.363c.016.512.036 1.024.083 1.534c.122 1.314.241 2.628.398 3.938c.108.903.222 1.812.434 2.694a30.922 30.922 0 0 0 1.742 5.188a11.127 11.127 0 0 0 3.148 4.184zm-3.591-16.768a208.11 208.11 0 0 1-.159-4.739c-.042-1.942-.056-3.885-.083-5.827l-.005-.074c-.987.593-1.96 1.241-2.989 1.776c-1.207.627-2.517.99-3.874 1.093c-1.063.08-2.142.153-3.2.069c-1.736-.141-3.472-.412-5.026-1.268c-.63-.347-1.288-.77-1.723-1.323c-1.041-1.329-.542-3.008 1.028-3.816c1.085-.56 2.269-.793 3.445-1.065a35.84 35.84 0 0 0 3.036-.83c.986-.323 1.608-1.123 2.223-1.908l.974-1.252l-1.171-.122c-1.162-.108-2.271-.429-3.331-.899c-.906-.401-.92-.445-1.586.277c-1.11 1.205-2.19 2.44-3.279 3.666c-.801.902-1.596 1.809-2.395 2.714c-.788.895-1.528 1.84-2.379 2.672c-1.262 1.236-2.784 1.979-4.6 1.895c-1.165-.054-2.231-.462-3.191-1.129c-1.979-1.378-3.312-3.308-4.527-5.333c-1.555-2.596-2.75-5.361-3.771-8.201c-.707-1.964-1.418-3.929-2.034-5.921c-.671-2.165-1.26-4.355-1.839-6.547c-.438-1.653-.826-3.32-1.196-4.99a173.85 173.85 0 0 1-1.182-5.715c-.241-1.291-.38-2.601-.575-3.9c-.263-1.753-.311-3.52-.215-5.279c.085-1.585.312-3.165.538-4.739c.313-2.178 1.031-4.233 2.063-6.174a16.315 16.315 0 0 1 2.323-3.274c1.49-1.649 3.293-2.84 5.299-3.735c1.401-.625 2.882-1 4.391-1.295c2.24-.436 4.5-.418 6.76-.372c.988.021 1.973.2 2.96.299c2.126.211 4.209.659 6.266 1.21c1.5.402 2.969.924 4.455 1.376c.148.045.367.041.49-.038c2.015-1.316 4.216-2.184 6.559-2.681c.889-.188 1.807-.271 2.716-.329c1.104-.069 2.219-.135 3.321-.07c1.325.076 2.646.271 3.963.451c.64.088 1.264.309 1.904.369c.308.029.633-.194.957-.27c1.654-.383 3.301-.808 4.97-1.109c1.242-.224 2.512-.33 3.774-.402c1.41-.081 2.828-.14 4.236-.072c1.78.086 3.547.339 5.291.745c2.162.503 4.234 1.233 6.205 2.247c1.473.759 2.872 1.637 4.133 2.717c.826.709 1.672 1.408 2.417 2.198c.92.974 1.858 1.947 2.436 3.194c.435.941.745 1.915.831 2.944c.106 1.281.235 2.566.224 3.849c-.011 1.226-.179 2.451-.297 3.675c-.271 2.788-.876 5.516-1.613 8.208a93.794 93.794 0 0 1-2.089 6.596c-.709 2.003-1.528 3.969-2.355 5.928a65.327 65.327 0 0 1-1.984 4.281c-1.354 2.652-2.762 5.277-4.391 7.777c-.281.431-.548.873-.822 1.314c.711.479 1.516.648 2.326.736c.771.083 1.557.134 2.327.076c1.233-.092 2.462-.268 3.688-.439c1.214-.17 2.403-.515 3.651-.424c1.244.091 2.136 1.037 2.051 2.203c-.054.738-.393 1.371-.883 1.912c-2.315 2.554-5.221 4.102-8.545 4.865c-1.263.29-2.565.439-3.858.56a25.74 25.74 0 0 1-3.321.078c-.812-.03-1.617-.216-2.447-.336c-.084.759-.163 1.55-.259 2.338l-.387 3.023c-.117.958-.208 1.92-.329 2.878c-.118.93-.265 1.855-.389 2.784c-.115.865-.2 1.735-.33 2.599c-.197 1.324-.386 2.651-.645 3.965c-.31 1.57-.784 3.09-1.561 4.507c-.946 1.729-2.287 3.046-3.995 4.021c-1.76 1.005-3.685 1.528-5.634 1.966c-1.382.311-2.803.361-4.202.234c-2.425-.219-4.495-1.256-6.06-3.137c-1.493-1.795-2.504-3.851-2.865-6.18a49.257 49.257 0 0 1-.396-3.339a86.327 86.327 0 0 1-.244-3.732zm2.726-15.954c.015.83-.071 1.66-.067 2.49c.017 3.863.045 7.727.078 11.591c.006.631.037 1.264.082 1.894c.095 1.32.189 2.641.317 3.957c.092.935.217 1.867.364 2.795c.21 1.313.808 2.483 1.486 3.602c.584.962 1.345 1.778 2.346 2.342c1.702.957 3.533 1.037 5.379.685c1.247-.237 2.473-.62 3.683-1.015a8.166 8.166 0 0 0 3.178-1.901c.849-.822 1.451-1.825 1.857-2.932c.787-2.146 1.034-4.407 1.359-6.649c.122-.84.228-1.682.339-2.523c.127-.957.255-1.913.377-2.87c.092-.714.174-1.427.261-2.14c.125-1.024.256-2.047.375-3.071c.091-.792.167-1.587.249-2.381c.104-1.015.215-2.027.306-3.044c.068-.77.04-1.555.177-2.312c.251-1.387.907-2.567 2.137-3.331c.514-.318 1.096-.528 1.666-.798l-.098-.149c-.527-.684-1.067-1.357-1.584-2.049c-.812-1.086-1.396-2.297-1.983-3.514c-.556-1.154-1.236-2.246-1.821-3.387c-1.021-1.99-2.061-3.975-3.002-6.002c-1.183-2.55-2.115-5.188-2.408-8.012c-.125-1.194-.157-2.388.086-3.571c.387-1.89 1.373-3.368 3.033-4.382c1.54-.94 3.255-1.244 5.012-1.339c1.09-.059 2.187-.011 3.318-.011l-.037-.191c-.704-1.472-1.361-2.969-2.132-4.405c-1.086-2.028-2.478-3.856-4.026-5.553a27.94 27.94 0 0 0-3.75-3.45c-1.338-1.013-2.748-1.918-4.253-2.657a24.95 24.95 0 0 0-5.624-2c-1.885-.418-3.78-.674-5.714-.695c-1.648-.018-3.286.058-4.892.429c-2.424.561-4.641 1.559-6.568 3.175a17.016 17.016 0 0 0-2.839 3.044c-.967 1.325-1.745 2.759-2.411 4.26c-.914 2.061-1.541 4.204-1.971 6.408c-.214 1.1-.382 2.207-.553 3.314c-.06.389-.064.784-.1 1.229l.732-.381l.714-.32c2.417-1.105 4.92-1.816 7.61-1.735c1.144.034 2.236.261 3.254.762c1.95.962 3.09 2.597 3.586 4.665c.342 1.428.577 2.884.805 4.337c.178 1.134.361 2.28.381 3.424c.029 1.672-.055 3.348-.146 5.019a13.997 13.997 0 0 1-.872 4.154c-.904 2.416-1.912 4.793-2.853 7.195c-.311.794-.55 1.615-.843 2.488l1.188.001c.144.003.291.007.43.04c1.081.255 2.02.745 2.789 1.577c1.028 1.104 1.566 2.396 1.593 3.893zM41.897 56.042a14.187 14.187 0 0 1-1.094-4.538c-.104-1.474.071-2.94.223-4.408c.146-1.421.27-2.849.312-4.275c.071-2.347-.087-4.688-.199-7.033c-.067-1.396.095-2.809.219-4.208c.112-1.26.252-2.523.491-3.765c.399-2.084.93-4.138 1.685-6.129c.715-1.888 1.539-3.725 2.699-5.38c.797-1.136 1.699-2.195 2.566-3.305l-.258-.092c-2.823-.896-5.693-1.598-8.646-1.903c-1.395-.145-2.796-.229-4.195-.313c-.43-.025-.866.033-1.297.074c-1.067.103-2.148.143-3.198.343c-1.787.34-3.502.912-5.089 1.843a12.632 12.632 0 0 0-3.626 3.211c-1.107 1.431-1.854 3.049-2.389 4.773c-.632 2.035-.934 4.13-1.015 6.243c-.071 1.853-.106 3.716.214 5.562c.237 1.373.396 2.762.658 4.131a122.89 122.89 0 0 0 1.186 5.573c.633 2.644 1.267 5.29 2.018 7.902c.718 2.501 1.527 4.98 2.407 7.43c.718 1.999 1.549 3.961 2.424 5.896c.57 1.261 1.26 2.475 1.984 3.655c.769 1.254 1.645 2.444 2.831 3.354c1.499 1.148 2.658 1.327 4.182.066c.652-.539 1.203-1.207 1.771-1.842c.901-1.008 1.771-2.046 2.669-3.059c1.143-1.289 2.3-2.565 3.449-3.85c.243-.271.478-.551.714-.825l-.393-.343a14.33 14.33 0 0 1-3.303-4.788zm43.341-38.403a49.306 49.306 0 0 1 2.672 3.394a30.638 30.638 0 0 1 3.855 7.336c.42 1.155.756 2.321.606 3.584c-.104.885-.097 1.782-.174 2.672c-.065.74-.183 1.476-.278 2.214c-.144 1.112-.352 2.222-.414 3.339c-.06 1.064.003 2.138.07 3.203c.067 1.083.213 2.161.312 3.241c.112 1.227.264 2.451.298 3.68c.028 1.008-.062 2.021-.149 3.029a12.063 12.063 0 0 1-.87 3.512c-.323.794-.708 1.562-1.071 2.356l.146.154l.222.172l.225-.4a75.33 75.33 0 0 0 5.021-9.277a147.495 147.495 0 0 0 2.654-6.27a69.833 69.833 0 0 0 3.151-10.094c.36-1.544.636-3.112.88-4.68c.191-1.226.349-2.466.385-3.703c.037-1.312-.035-2.634-.156-3.942c-.091-.988-.335-1.982-.953-2.787c-.996-1.293-2.07-2.529-3.391-3.508c-1.113-.823-2.223-1.67-3.416-2.362c-1.893-1.099-3.942-1.829-6.083-2.327c-2.091-.487-4.207-.697-6.337-.742c-1.256-.027-2.518.108-3.771.227c-1.136.106-2.265.288-3.408.438c1.227.69 2.438 1.304 3.578 2.027c2.4 1.52 4.552 3.349 6.396 5.514zm-31.18 42.563c.775-2.48 1.832-4.85 2.855-7.232c.831-1.933 1.284-3.968 1.435-6.06c.075-1.031.055-2.075.004-3.109a35.642 35.642 0 0 0-.316-3.438c-.215-1.454-.459-2.909-.803-4.336c-.373-1.544-1.313-2.62-2.925-3.017c-.981-.241-1.957-.231-2.95-.074c-2.423.381-4.641 1.274-6.707 2.582c-.416.263-.646.476-.573 1.071c.152 1.264.185 2.548.179 3.823c-.008 1.805-.085 3.61-.153 5.414c-.022.587-.107 1.173-.171 1.758c-.096.896-.283 1.791-.277 2.686c.006.922.1 1.865.324 2.758c.711 2.832 2.215 5.148 4.682 6.783c1.517 1.006 3.195 1.512 5.038 1.609c.122-.423.235-.822.358-1.218zm-2.896-24.289c-.325-.681-.139-1.246.613-1.508c.184-.063.372-.133.562-.151c.263-.026.528-.007.793-.007c.955.006 1.873.139 2.66.745c.506.39.642.905.314 1.437c-.465.753-1.172 1.131-2.042 1.203c-1.369.113-2.33-.525-2.9-1.719zm37.975-.249l.311-2.725c.045-.364-.146-.464-.452-.473c-.963-.026-1.925-.061-2.888-.077c-1.084-.02-2.141.154-3.145.566c-1.114.459-1.962 1.193-2.309 2.406a7.266 7.266 0 0 0-.236 2.752a16.29 16.29 0 0 0 .963 4.18c.674 1.793 1.378 3.585 2.221 5.303c1.141 2.325 2.431 4.577 3.643 6.867c.323.611.597 1.25.934 1.963a11.11 11.11 0 0 0 1.09-4.538c.033-1.301-.07-2.605-.146-3.906c-.047-.796-.16-1.588-.237-2.382c-.107-1.106-.271-2.213-.297-3.322c-.025-1.128.055-2.262.151-3.389c.09-1.078.268-2.149.397-3.225zm-2.169-.874c-.358.987-1.122 1.545-2.114 1.708c-.924.153-1.734-.188-2.336-.926c-.429-.525-.265-1.146.378-1.502c.738-.408 1.549-.511 2.506-.573c.261.047.651.088 1.023.193c.539.152.739.56.543 1.1zM58.37 65.193c-.528-.432-1.228-.457-1.73.017c-.624.59-1.173 1.264-1.722 1.928c-.633.768-1.229 1.566-2.045 2.161c-1.189.865-2.578 1.223-3.972 1.562c-1.108.27-2.222.521-3.333.779l-.014.144c.33.152.649.343.994.452c1.695.536 3.42.804 5.212.652c1.292-.111 2.524-.393 3.691-.946c1.607-.761 2.844-1.968 3.895-3.37c.176-.234.256-.58.276-.882c.071-1.066-.47-1.859-1.252-2.497zm30.945-.462c-.831.279-1.507.704-1.708 1.603c-.137.608-.187 1.237-.24 1.86c-.01.11.127.312.231.34c.64.169 1.284.368 1.938.427c.805.073 1.623.05 2.433.01c.874-.044 1.754-.101 2.616-.245c2.029-.342 3.994-.896 5.738-2.048c.63-.415 1.252-.839 1.878-1.261l-.052-.089c-.667.099-1.332.22-2.002.291c-1.364.146-2.729.3-4.098.379c-.661.038-1.331-.089-1.997-.143c-1.118-.091-2.21-.339-3.155-.937c-.545-.344-1.001-.382-1.582-.187z'
                      clipRule='evenodd'
                    />
                    <path
                      fill='#000000'
                      d='M2.835 103.184a26.23 26.23 0 0 1 4.343-.338c2.235 0 3.874.52 4.914 1.456c.962.832 1.534 2.106 1.534 3.667c0 1.586-.469 2.834-1.353 3.744c-1.196 1.274-3.146 1.924-5.356 1.924c-.676 0-1.3-.026-1.819-.156v7.021H2.835v-17.318zm2.263 8.45c.494.13 1.118.182 1.872.182c2.729 0 4.394-1.326 4.394-3.744c0-2.314-1.638-3.432-4.134-3.432c-.988 0-1.742.078-2.132.182v6.812zm22.23 2.47c0 4.654-3.225 6.683-6.267 6.683c-3.406 0-6.032-2.496-6.032-6.475c0-4.212 2.756-6.682 6.24-6.682c3.615-.001 6.059 2.626 6.059 6.474zm-9.984.13c0 2.756 1.586 4.836 3.822 4.836c2.184 0 3.821-2.054 3.821-4.888c0-2.132-1.065-4.836-3.77-4.836s-3.873 2.496-3.873 4.888zm12.557 3.926c.676.442 1.872.91 3.016.91c1.664 0 2.444-.832 2.444-1.872c0-1.092-.649-1.69-2.34-2.314c-2.262-.806-3.328-2.054-3.328-3.562c0-2.028 1.638-3.692 4.342-3.692c1.274 0 2.393.364 3.095.78l-.572 1.664a4.897 4.897 0 0 0-2.574-.728c-1.352 0-2.106.78-2.106 1.716c0 1.04.755 1.508 2.393 2.132c2.184.832 3.302 1.924 3.302 3.796c0 2.21-1.716 3.77-4.706 3.77c-1.378 0-2.652-.338-3.536-.858l.57-1.742zm13.365-13.859v3.614h3.275v1.742h-3.275v6.786c0 1.56.441 2.444 1.716 2.444a5.09 5.09 0 0 0 1.326-.156l.104 1.716c-.441.182-1.144.312-2.027.312c-1.066 0-1.925-.338-2.471-.962c-.649-.676-.884-1.794-.884-3.276v-6.864h-1.95v-1.742h1.95v-3.016l2.236-.598zm16.536 3.615c-.053.91-.104 1.924-.104 3.458v7.306c0 2.886-.572 4.654-1.794 5.747c-1.222 1.144-2.99 1.508-4.576 1.508c-1.508 0-3.172-.364-4.187-1.04l.572-1.742c.832.52 2.132.988 3.692.988c2.34 0 4.056-1.222 4.056-4.394v-1.404h-.052c-.702 1.17-2.054 2.106-4.004 2.106c-3.12 0-5.356-2.652-5.356-6.137c0-4.264 2.782-6.682 5.668-6.682c2.185 0 3.381 1.144 3.927 2.184h.052l.104-1.898h2.002zm-2.366 4.966c0-.39-.026-.728-.13-1.04c-.416-1.326-1.534-2.418-3.198-2.418c-2.185 0-3.744 1.846-3.744 4.758c0 2.47 1.248 4.524 3.718 4.524c1.404 0 2.678-.884 3.172-2.34c.13-.39.183-.832.183-1.222v-2.262zm5.901-1.04c0-1.482-.026-2.756-.104-3.926h2.003l.077 2.47h.104c.572-1.69 1.95-2.756 3.484-2.756c.26 0 .441.026.649.078v2.158a3.428 3.428 0 0 0-.779-.078c-1.612 0-2.757 1.222-3.068 2.938a6.44 6.44 0 0 0-.104 1.066v6.708h-2.262v-8.658zm9.517 2.782c.052 3.094 2.027 4.368 4.315 4.368c1.639 0 2.626-.286 3.484-.65l.39 1.638c-.806.364-2.184.78-4.186.78c-3.874 0-6.188-2.548-6.188-6.344c0-3.796 2.236-6.787 5.902-6.787c4.108 0 5.2 3.614 5.2 5.928c0 .468-.052.832-.078 1.066h-8.839zm6.708-1.638c.025-1.456-.599-3.718-3.172-3.718c-2.314 0-3.328 2.132-3.511 3.718h6.683zm4.809 4.758a8.016 8.016 0 0 0 4.056 1.144c2.314 0 3.666-1.222 3.666-2.99c0-1.638-.936-2.574-3.302-3.484c-2.86-1.014-4.628-2.496-4.628-4.966c0-2.73 2.262-4.758 5.668-4.758c1.794 0 3.094.416 3.874.858l-.624 1.846a6.98 6.98 0 0 0-3.328-.832c-2.392 0-3.302 1.43-3.302 2.626c0 1.638 1.065 2.444 3.484 3.38c2.964 1.145 4.472 2.574 4.472 5.148c0 2.704-2.002 5.044-6.136 5.044c-1.69 0-3.536-.494-4.473-1.118l.573-1.898zm27.586 5.33a94.846 94.846 0 0 1-6.708-2.028c-.364-.13-.728-.26-1.066-.26c-4.16-.156-7.722-3.224-7.722-8.866c0-5.616 3.432-9.23 8.164-9.23c4.758 0 7.853 3.692 7.853 8.866c0 4.498-2.08 7.384-4.992 8.398v.104c1.742.442 3.64.858 5.122 1.118l-.651 1.898zm-1.872-11.414c0-3.51-1.819-7.125-5.538-7.125c-3.822 0-5.694 3.536-5.668 7.333c-.026 3.718 2.028 7.072 5.564 7.072c3.615 0 5.642-3.276 5.642-7.28zm5.329-8.684h2.263v15.626h7.488v1.898h-9.751v-17.524z'
                    />
                  </svg>
                  Postgresql
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
