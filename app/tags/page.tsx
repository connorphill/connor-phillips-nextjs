import React from 'react';
import { getTags } from '@/libs/ghost';
import Link from 'next/link';

interface Tag {
  id: string;
  slug: string;
  name: string;
}

interface TagsProps {
  tags: Tag[];
}

export default async function Tags() {
  const tags = await getTags();

  const tagsByFirstCharacter: { [key: string]: Tag[] } = {};

  // Group tags by the first character of tag.name
  tags.forEach((tag) => {
    const firstChar = tag?.name[0].toUpperCase(); // Ensure it's uppercase
    if (!tagsByFirstCharacter[firstChar]) {
      tagsByFirstCharacter[firstChar] = [];
    }
    tagsByFirstCharacter[firstChar].push(tag);
  });

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col py-5'>
        <div className='flex flex-col py-10' id='content-header'>
          <h1 className='text-4xl lg:text-5xl font-semibold text-gold-500'>Topics</h1>
        </div>
        <div id='content-body'>
          <ul>
            {alphabet.split('').map((letter) => (
              <div key={letter} className='flex flex-col px-5'>
                <p className='text-3xl font-bold py-3'>{letter}</p>
                <ul>
                  {tagsByFirstCharacter[letter] &&
                    tagsByFirstCharacter[letter].map((tag) => (
                      <li key={tag.id} className='text-2xl font-light py-2'>
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
