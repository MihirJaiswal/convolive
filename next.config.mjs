/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'lh3.googleusercontent.com',
      },
      {
        hostname: 'www.geckoboard.com',
      },
    ],
  },
};

export default nextConfig;
