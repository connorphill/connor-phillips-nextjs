import React from 'react';
import { getTags } from '@/libs/ghost';
import Link from 'next/link';
import type { Metadata } from 'next';

interface Tag {
  id: string;
  slug: string;
  name: string;
}

interface TagsProps {
  tags: Tag[];
}

export const metadata: Metadata = {
  title: 'Topics | Connor Phillips',
  description: 'All of the topics that Connor Phillips has written about.',
  alternates: {
    canonical: `/tags/`,
  },
  openGraph: {
    url: '/tags/',
    title: 'Topics | Connor Phillips',
    description: 'All of the topics that Connor Phillips has written about.',
  },
  twitter: {
    title: 'Topics | Connor Phillips',
    description: 'All of the topics that Connor Phillips has written about.',
  },
};

export default async function Tags() {
  const tags: any = await getTags();

  const tagsByFirstCharacter: { [key: string]: Tag[] } = {};

  // Group tags by the first character of tag.name
  tags.forEach((tag: any) => {
    const firstChar = tag?.name[0].toUpperCase(); // Ensure it's uppercase
    if (!tagsByFirstCharacter[firstChar]) {
      tagsByFirstCharacter[firstChar] = [];
    }
    tagsByFirstCharacter[firstChar].push(tag);
  });

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col py-10'>
        <div className='flex flex-col' id='content-header'>
          <h1 className='text-3xl font-semibold text-midnight-500 lg:text-5xl'>
            Topics
          </h1>
        </div>
        <div id='content-body'>
          <ul>
            {alphabet.split('').map((letter) => (
              <div key={letter} className='flex flex-col px-5'>
                <p className='py-3 text-3xl font-bold'>{letter}</p>
                <ul>
                  {tagsByFirstCharacter[letter] &&
                    tagsByFirstCharacter[letter].map((tag) => (
                      <li key={tag.id} className='py-2 text-2xl font-light'>
                        <Link href={`/tag/${tag?.slug}`}>{tag?.name}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
