/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export', // Enables static site generation
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: isGithubActions ? '/microplastics' : '', // Use basePath on GitHub Pages
};

export default nextConfig;
