/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Enables static site generation
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: isProd ? '/microplastics' : '', // Only use basePath in production - Required for Github Pages
};

export default nextConfig;
