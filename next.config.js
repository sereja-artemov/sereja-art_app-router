/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sereja-art.ru',
      },
      {
        protocol: 'http',
        hostname: 'tech.sereja-art.ru',
      },
    ],
  },
//   async redirects() {
//     return [
//         {
//             // What the user typed in the browser
//             source: '/blogs/:path*',
//             // Where the user will be redirected to
//             destination: '/blog/:path*',
//             // If the destination is a permanent redirect (308)
//             permanent: true
//         }
//     ];
// }
};

module.exports = nextConfig;
