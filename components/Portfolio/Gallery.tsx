'use client'
import React, { useEffect } from 'react'

export default function Gallery() {
       useEffect(() => {
    const images = document.querySelectorAll('.kg-gallery-image img');

    images.forEach((image) => {
      const container = image.closest('.kg-gallery-image') as HTMLElement;
      if (container) {
        const width = image.getAttribute('width');
        const height = image.getAttribute('height');

        if (width && height) {
          const ratio = parseInt(width) / parseInt(height);
          container.style.flex = `${ratio} 1 0%`;
        }
      }
    });
  }, []);

  return (
    <figure className="kg-card kg-gallery-card kg-width-wide">
         <div className="kg-gallery-container">
            <div className="kg-gallery-row">
               <div className="kg-gallery-image"><img src="https://s3.amazonaws.com/ghost-blogpost-images/2020/11/annotation-01.png" width="606" height="809" loading="lazy" /></div>
               <div className="kg-gallery-image"><img src="https://s3.amazonaws.com/ghost-blogpost-images/2020/11/data-story-02.png" width="1166" height="610" loading="lazy" /></div>
            </div>
            <div className="kg-gallery-row">
               <div className="kg-gallery-image"><img src="https://s3.amazonaws.com/ghost-blogpost-images/2020/11/feed-02.png" width="1001" height="605" loading="lazy" /></div>
               <div className="kg-gallery-image"><img src="https://s3.amazonaws.com/ghost-blogpost-images/2020/11/annotation-request-feed-01.png" width="1257" height="602" loading="lazy" /></div>
            </div>
         </div>
      </figure>
  )
}
