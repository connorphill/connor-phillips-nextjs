/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3.amazonaws.com', 'images.unsplash.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 's3.amazonaws.com',
    //     port: '',
    //     pathname: '/ghost-blogpost-images/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 's3.amazonaws.com',
    //     port: '',
    //     pathname: '/data-analyst-academy-blog/**',
    //   },
    // ],
  },
};

module.exports = nextConfig;
