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
};

module.exports = nextConfig;
