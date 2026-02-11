/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/PortfolioJC',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
