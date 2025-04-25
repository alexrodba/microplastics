/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site generation
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/microplastics', // Add this line - should match your repository name
};

export default nextConfig;
