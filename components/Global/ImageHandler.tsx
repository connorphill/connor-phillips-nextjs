'use client';
import Image from 'next/image';
import React from 'react';

interface ImageHandlerProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageHandler: React.FC<ImageHandlerProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      className='object-cover max-lg:h-32'
      alt={alt}
      onError={(e) => {
        e.currentTarget.classList.add('hidden');
        e.currentTarget.src = '';
      }}
    />
  );
};

export default ImageHandler;
