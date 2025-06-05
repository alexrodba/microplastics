/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site generation
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.BASE_PATH || '',
};

export default nextConfig;
