import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.GHOST_CONTENT_URL as string,
  key: process.env.GHOST_CONTENT_API as string,
  version: 'v5.0',
});

// GET all posts
export async function getPosts() {
  return await api.posts
    .browse({
      include: 'tags',
      limit: '10',
    })
    .catch((err) => {
      console.error(err);
    });
}

// GET all posts for sitemap
export async function getPostsSitemap() {
  return await api.posts
    .browse({
      limit: 'all',
      fields: 'url,updated_at'
    })
    .then((posts)=> {
      // console.log(posts)
      var arr = []
      posts.forEach((post)=>{
        // console.log(post.url)
        // console.log(post.updated_at)
        arr.push({ url: post.url, date: post.updated_at})
      })
      return arr;
    })
    .catch((err) => {
      console.error(err);
    });
}

// GET posts by page
export async function getPostsByPage(pageNum: number) {
  console.log(`This is the getPostsByPage: ${pageNum}`);
  return await api.posts
    .browse({
      include: 'tags',
      limit: 10,
      page: pageNum,
    })
    .catch((err) => {
      console.error(err);
    });
}

// GET single post by post slug
export async function getSinglePost(postSlug: String) {
  return await api.posts
    .read({
      slug: postSlug as string,
      include: 'tags' as string,
    })
    .catch((err) => {
      console.error(err);
    });
}
// GET single tag by tag slug
export async function getSingleTag(tagSlug: String) {
  return await api.tags
    .read({
      slug: tagSlug as string,
      include: 'posts' as string,
    })
    .catch((err) => {
      console.error(err);
    });
}

// GET all posts by tag slug
export async function getPostsFromTag(tagSlug: String) {
  return await api.posts
    .browse({
      filter: `tag:${tagSlug}`,
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });
}

// GET all tags
export async function getTags() {
  return await api.tags
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });
}

// GET all tags for sitemap xml
export async function getTagsSitemap() {
  return await api.tags
    .browse({
      limit: 'all',
      fields: 'url'
    })
    .then((tags)=> {
      var arr = []
      tags.forEach((tag)=>{
        arr.push({ url: tag.url })
      })
      return arr;
    })
    .catch((err) => {
      console.error(err);
    });
}

// GET all pages
export async function getPages() {
  return await api.pages
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });
}

// GET all pages for sitemap xml
export async function getPagesSitemap() {
  return await api.pages
    .browse({
      limit: 'all',
      fields: 'url'
    })
    .then((pages)=> {
      var arr = []
      pages.forEach((page)=>{
        arr.push({ url: page.url })
      })
      return arr;
    })
    .catch((err) => {
      console.error(err);
    });
}
