/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    domains: ['s3.amazonaws.com', 'images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'example.com' }],
        destination: 'https://www.connorphillips.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
