/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/gitdeploy-studio',
  assetPrefix: '/gitdeploy-studio',
};

module.exports = nextConfig;
