import GhostContentAPI from '@tryghost/content-api';
import { cache } from 'react';

// Create API instance with site credentials
const api: any = new GhostContentAPI({
  url: ('https://admin.connorphillips.com' as string) || '',
  key: (process.env.GHOST_CONTENT_API as string) || '',
  version: 'v5.0',
});

const url = `https://admin.connorphillips.com/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API}`;

// GET all posts
export const getPosts = async () => {
  try {
    const response = await fetch(`${url}&include=tags&limit=10`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Version': 'v5.0',
      },
      next: { revalidate: 10 },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// GET all posts for sitemap
export async function getPostsSitemap() {
  return await api.posts
    .browse({
      limit: 'all',
      fields: 'url,updated_at',
    })
    .then((posts: any) => {
      var arr: any = [];
      posts.forEach((post: any) => {
        arr.push({ url: post.url, date: post.updated_at });
      });
      return arr;
    })
    .catch((err: any) => {
      console.error(err);
    });
}

// GET posts by page
export const getPostsByPage = async (pageNum: number) => {
  try {
    const response = await fetch(
      `${url}&include=tags&limit=10&page=${pageNum}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Version': 'v5.0',
        },
        next: { revalidate: 10 },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// GET single post by post slug
export const getSinglePost = cache(async (postSlug: String) => {
  return await api.posts
    .read({
      slug: postSlug as string,
      include: 'tags' as string,
    })
    .catch((err: any) => {
      console.error(err);
    });
});

// GET single tag by tag slug
export const getSingleTag = cache(async (tagSlug: String) => {
  return await api.tags
    .read({
      slug: tagSlug as string,
      include: 'posts' as string,
    })
    .catch((err: any) => {
      console.error(err);
    });
});

// GET all posts by tag slug
export const getPostsFromTag = async (tagSlug: String) => {
  return await api.posts
    .browse({
      filter: `tag:${tagSlug}`,
      limit: 'all',
    })
    .catch((err: any) => {
      console.error(err);
    });
};

// GET all tags
export const getTags = async () => {
  return await api.tags
    .browse({
      limit: 'all',
    })
    .catch((err: any) => {
      console.error(err);
    });
};

// GET all tags for sitemap xml
export async function getTagsSitemap() {
  return await api.tags
    .browse({
      limit: 'all',
      fields: 'url',
    })
    .then((tags: any) => {
      var arr: any = [];
      tags.forEach((tag: any) => {
        arr.push({ url: tag.url });
      });
      return arr;
    })
    .catch((err: any) => {
      console.error(err);
    });
}

// GET all pages
export const getPages = cache(async () => {
  return await api.pages
    .browse({
      limit: 'all',
    })
    .catch((err: any) => {
      console.error(err);
    });
});

// GET all pages for sitemap xml
export async function getPagesSitemap() {
  return await api.pages
    .browse({
      limit: 'all',
      fields: 'url',
    })
    .then((pages: any) => {
      var arr: any = [];
      pages.forEach((page: any) => {
        arr.push({ url: page.url });
      });
      return arr;
    })
    .catch((err: any) => {
      console.error(err);
    });
}
