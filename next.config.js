/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'www.fillmurray.com',
      'upload.wikimedia.org',
      'www.placecage.com',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'images.pexels.com',
      'joeschmoe.io',
      'eu.ui-avatars.com',
    ],
  },
};

module.exports = nextConfig;
