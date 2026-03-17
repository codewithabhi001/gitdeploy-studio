/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/gitdeploy-studio',
  trailingSlash: true,
};

module.exports = nextConfig;
