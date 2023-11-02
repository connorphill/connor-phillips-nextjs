'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { pageview } from '../../libs/gtm';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  var content = '';
  var page = '';

  function formatString(inputString: string) {
    // Check if the input string contains a hyphen
    if (inputString.includes('-')) {
      // Split the string by "-"
      const words = inputString.split('-');

      // Capitalize the first letter of each word and join them with a space
      const formattedString = words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return formattedString;
    } else {
      // If there is no hyphen, simply capitalize the first letter
      return inputString.charAt(0).toUpperCase() + inputString.slice(1);
    }
  }

  if (pathname == '/') {
    page = 'Homepage';
    content = 'Homepage';
  } else if (pathname.includes('/tag')) {
    page = 'Tag';
    content = formatString(pathname.split('/').slice(-1).toString());
  } else if (pathname.includes('/about')) {
    page = 'About';
    content = 'Connor Phillips';
  } else if (pathname.includes('/page')) {
    page = 'Page';
    content = formatString(pathname.split('/').slice(-1).toString());
  } else if (pathname.includes('/portfolio')) {
    page = 'Portfolio';
    content = formatString(pathname.split('/').slice(-1).toString());
  } else {
    page = 'Post';
    content = formatString(pathname.split('/').slice(-1).toString());
  }

  useEffect(() => {
    if (pathname) {
      return pageview(pathname, content, page);
    }
  }, [pathname, searchParams, content, page]);

  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
    return null;
  }
}

// 'page_category': {{#is "index" }}'Homepage'{{/is}}{{#is "page" }}'Page'{{/is}}{{#is "post"}}'Post'{{/is}}{{#is "tag" }}'Tag'{{/is}}{{#is "author" }}'Author'{{/is}},
//             'content_category': {{#is "index" }}'Homepage'{{/is}}{{#is "page" }}{{#page}}'{{title}}'{{/page}}{{/is}}{{#is "post" }}{{#post}}{{#primary_tag}}'{{name}}'{{/primary_tag}}{{/post}}{{/is}}{{#is "tag" }}{{#tag}}'{{name}}'{{/tag}}{{/is}}{{#is "author" }}{{#primary_author}}'{{name}}'{{/primary_author}}{{/is}}
