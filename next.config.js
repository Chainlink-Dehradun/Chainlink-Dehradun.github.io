/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? '/Chainlink-Dehradun.github.io' : '',
  assetPrefix: isProd ? '/Chainlink-Dehradun.github.io/' : '',
}

module.exports = nextConfig
