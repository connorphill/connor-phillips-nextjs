import { getPostsSitemap, getTagsSitemap, getPagesSitemap } from '@/libs/ghost'
// import { MetadataRoute } from 'next'
 
export default async function sitemap() {

    const URL = 'https://www.connorphillips.com'

    const posts = await getPostsSitemap().then((res) => {
        const postsXml = res.map(({url, date}) => ({
            url: url,
            lastModified: date
        }))
        console.log(postsXml)
        return postsXml;
    })
    
    const tags = await getTagsSitemap().then((res) => {
        const tagsXml = res.map(({url}) => ({
            url: url,
            lastModified: new Date().toISOString()
        }))
        console.log(tagsXml)
        return tagsXml;
    })

    const pages = await getPagesSitemap().then((res) => {
        const pagesXml = res.map(({url}) => ({
            url: url,
            lastModified: new Date().toISOString()
        }))
        console.log(pagesXml)
        return pagesXml;
    })

    const routes = ["", "/synotate/", "/portfolio/", "/about/", "/tags/"].map((route) => ({
        url: `${URL}${route}`,
        lastModified: new Date().toISOString(),
    }));

    
    return [...routes, ...posts, ...tags]

}