/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/ghost-blogpost-images/**',
      },
    ],
  },
};

module.exports = nextConfig;
