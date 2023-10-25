import GhostContentAPI from '@tryghost/content-api';
import { cache } from 'react'

// Create API instance with site credentials
const api: any = new GhostContentAPI({
  url: "https://www.connorphillips.com" as string || "",
  key: process.env.GHOST_CONTENT_API as string || "",
  version: 'v5.0',
});

// GET all posts
export const getPosts = cache(async () => {
  return await api.posts
    .browse({
      include: 'tags',
      limit: '10',
    })
    .catch((err: any) => {
      console.error(err);
    });
})

// GET all posts for sitemap
export async function getPostsSitemap() {
  return await api.posts
    .browse({
      limit: 'all',
      fields: 'url,updated_at'
    })
    .then((posts: any)=> {
      var arr: any = []
      posts.forEach((post: any)=>{
        arr.push({ url: post.url, date: post.updated_at})
      })
      return arr;
    })
    .catch((err: any) => {
      console.error(err);
    });
}

// GET posts by page
export const getPostsByPage = cache(async(pageNum: number) => {
  return await api.posts
    .browse({
      include: 'tags',
      limit: 10,
      page: pageNum,
    })
    .catch((err: any) => {
      console.error(err);
    });
})

// GET single post by post slug
export const getSinglePost = cache(async (postSlug: String) => {
  return await api.posts
    .read({
      slug: postSlug as string,
      include: 'tags' as string,
    })
    .catch((err: any) => {
      console.log('Error')
      console.error(err);
    });
})

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
})

// GET all posts by tag slug
export const getPostsFromTag = cache(async (tagSlug: String) => {
  return await api.posts
    .browse({
      filter: `tag:${tagSlug}`,
      limit: 'all',
    })
    .catch((err: any) => {
      console.error(err);
    });
})

// GET all tags
export const getTags = cache(async () => {
  return await api.tags
    .browse({
      limit: 'all',
    })
    .catch((err: any) => {
      console.error(err);
    });
})

// GET all tags for sitemap xml
export async function getTagsSitemap() {
  return await api.tags
    .browse({
      limit: 'all',
      fields: 'url'
    })
    .then((tags: any)=> {
      var arr: any = []
      tags.forEach((tag: any)=>{
        arr.push({ url: tag.url })
      })
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
})

// GET all pages for sitemap xml
export async function getPagesSitemap() {
  return await api.pages
    .browse({
      limit: 'all',
      fields: 'url'
    })
    .then((pages: any)=> {
      var arr: any = []
      pages.forEach((page: any)=>{
        arr.push({ url: page.url })
      })
      return arr;
    })
    .catch((err: any) => {
      console.error(err);
    });
}
