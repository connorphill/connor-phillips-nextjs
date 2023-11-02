import { getPostsSitemap, getTagsSitemap, getPagesSitemap } from '@/libs/ghost';

type Res = {
  url: string;
  date: string;
};

export default async function sitemap() {
  const URL = 'https://www.connorphillips.com';

  const posts = await getPostsSitemap()
    .then((res: any) => {
      const postsXml = res.map(({ url, date }: Res) => ({
        url: url,
        lastModified: date,
      }));
      // console.log(postsXml);
      return postsXml;
    })
    .catch((error) => {
      console.error('Error fetching posts:', error);
      return []; // Return an empty array or handle the error accordingly
    });

  const tags = await getTagsSitemap().then((res: any) => {
    const tagsXml = res.map(({ url }: Res) => ({
      url: url,
      lastModified: new Date().toISOString(),
    }));
    // console.log(tagsXml)
    return tagsXml;
  });

  const pages = await getPagesSitemap().then((res: any) => {
    const pagesXml = res.map(({ url }: Res) => ({
      url: url,
      lastModified: new Date().toISOString(),
    }));
    // console.log(pagesXml)
    return pagesXml;
  });

  const routes = ['', '/synotate/', '/portfolio/', '/about/', '/tags/'].map(
    (route) => ({
      url: `${URL}${route}`,
      lastModified: new Date().toISOString(),
    })
  );

  return [...routes, ...posts, ...tags];
}
