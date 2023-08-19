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
