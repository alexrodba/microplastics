/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || '';
console.log('Using basePath:', basePath);

const nextConfig = {
  output: 'export', // Enables static site generation
  images: {
    unoptimized: true, // Required for static export
  },
  basePath,
};

export default nextConfig;
