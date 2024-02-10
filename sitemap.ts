// import { MetadataRoute } from 'next';
// import { getPosts } from './lib/getPosts';
// import { navigationRoutes } from './data/navigationRoutes';

// const blogs = getPosts('blog');
// const notes = getPosts('notes');

// const blogsSitemap: MetadataRoute.Sitemap = blogs.map((post) => ({
//   url: `${process.env.HOST}/blog/${post.slug}`,
//   lastModified: post.date,
// }));
// const notesSitemap: MetadataRoute.Sitemap = notes.map((post) => ({
//   url: `${process.env.HOST}/notes/${post.slug}`,
//   lastModified: post.date,
// }));

// const postsSitemap = blogsSitemap.concat(notesSitemap);

// const navRoutes = navigationRoutes.map((element) => ({
//     url: `${process.env.HOST}/${element.route}`,
//     lastModified: new Date(),
// }));

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url: `${process.env.HOST}`,
//       lastModified: new Date(),
//     },
//     {
//       url: `${process.env.HOST}/about`,
//       lastModified: new Date(),
//     },
//     ...postsSitemap,
//     ...navRoutes,
//   ];
// }
