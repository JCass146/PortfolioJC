/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Uncomment only when building for GitHub Pages
  basePath: '/PortfolioJC',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
