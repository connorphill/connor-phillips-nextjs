import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Connor Phillips',
  description: 'Connor Phillips portfolio of businesses that he has started, as well as his software development projects.',
  alternates: {
      canonical: `/portoflio/`,
  },
  openGraph: {
        url: '/portfolio/synotate/',
        title: 'Portfolio | Connor Phillips',
        description: 'Connor Phillips portfolio of businesses that he has started, as well as his software development projects.',
  },
  twitter: {
    title: 'Portfolio | Connor Phillips',
    description: 'Connor Phillips portfolio of businesses that he has started, as well as his software development projects.',
  }
}

export default function Portfolio() {
  return (
    <div className='container mx-auto'>
    <div className='flex flex-col'>
        <div className='py-10' id='start-here'>
          <h1 className='text-3xl lg:text-5xl font-semibold text-midnight-500'>Portfolio</h1>
        </div>
        {/* Businesses Section */}
        <div className='flex flex-col' id='businesses'>
          <h2 className='text-2xl lg:text-4xl text-midnight-400'>Businesses</h2>
          <p className='py-4'>
            Businesses that I have founded or co-founded that have led to business and technical development in various disciplines. My role for every business has ranged from web/mobile development to strategy, and marketing/sales.
          </p>
          <div className='flex flex-col md:flex-row justify-between py-5'>
            <div className='basis-1/2 py-5 md:mr-5'>
              <div>
                <h3 className='text-2xl font-semibold'><Link href="/portfolio/synotate/" className='text-gold-500 hover:text-gold-700 hover:border-b-2 hover:border-gold-700'>Synotate</Link></h3>
                <p className='pt-3'><i>Development: 2017 - 2018 <br /> Production: 2019</i></p>
              </div>
              <div className='w-200 h-200 overflow-hidden'>
                <Image
                  src='https://s3.amazonaws.com/ghost-blogpost-images/2020/11/synotate-logo.png'
                  width={200}
                  height={200}
                  className='max-md:h-200 max-md:h-200 mx-auto object-cover'
                  alt='image'
                />
              </div>
              <div className='pt-5'>
                <p>A data analysis platform that helped businesses save time and resources by acting as a central repository of data annotations related to test results and trends found in data analysis.</p>
              </div>
            </div>
            <div className='basis-1/2 py-5'>
               <h3 className='text-2xl font-semibold'>Campus Taps</h3>
                <p className='pt-3'><i>Production: 2011 - 2013</i></p>
              <div className='pt-5'><p>A Social planning application for college students that provided a directory of bars and restaurants in the greater Baltimore area and through your Facebook account allows you to check in at establishments and see where your Facebook friends were going, as well as what were the most popular establishments for a given day.</p></div>
            </div>
          </div>
        </div>
        <div className='' id='projects'>
          <h2 className='text-2xl lg:text-4xl mt-10 text-midnight-400'>Projects</h2>
          <p className='py-4'>
            I love figuring out ways to use my technical abilities to come up with creative solutions to my everyday problems, and/or artistic pursuits. These projects range in purpose from visualizing my sleep patterns to understand my body to a simple nostalgic pursuit of the old days of using a Windows computer with a dial-up modem.
          </p>
          <div className='flex flex-col md:flex-row justify-between py-5'>
            <div className='basis-1/2 md:mr-5'>
              <div>
                <h3 className='text-2xl font-semibold'><a href="https://windowsnostalgia.connorphillips.com/" className='text-gold-500 hover:text-gold-700 hover:border-b-2 hover:border-gold-700'>Windows Nostalgia</a></h3>
                <p className='pt-3'><i>Development: 2017 - 2018 <br /> Production: 2019</i></p>
              </div>
              <div className='pt-5'>
                <p>A weekend project to transport you to the late 90&quot;s/early 00&quot;s, when you would boot up the computer, hear an ear piercing modem noise, and knew that you were going to find something new, interesting, or download something illegal.</p>
              </div>
            </div>
            <div className='basis-1/2'>
              <div>
                <h3 className='text-2xl font-semibold'>Understand Your Sleep</h3>
                <p className='pt-3'><i>Production: 2021</i></p>
              </div>
              <div className='w-200 h-200 overflow-hidden'>
                <Image
                  src='https://s3.amazonaws.com/ghost-blogpost-images/2021/02/understand-your-sleep-logo.png'
                  width={200}
                  height={200}
                  className='max-md:h-200 max-md:h-200 mx-auto object-cover'
                  alt='image'
                />
              </div>
              <div className='pt-5'>
                <p>A free Fitbit storytelling tool that turns your sleep patterns into a story that you can understand. Utilizing the Fitbit API, Node.js, D3.js and serverless technology I created a website that would tell a story about your sleep patterns.</p>
              </div>
            </div>
          </div>
      </div>
      </div>
      </div>
  );
}
