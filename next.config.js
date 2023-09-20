/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Enabling React's Strict Mode
  reactStrictMode: true,

  // Using SWC for minification
  swcMinify: true,

  // Setting the base path and asset prefix for production deployment on GitHub Pages
  basePath: isProd ? '/Chainlink-Dehradun.github.io' : '',
  assetPrefix: isProd ? '/Chainlink-Dehradun.github.io/' : '',
};
