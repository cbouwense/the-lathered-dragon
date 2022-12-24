/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["as1.ftcdn.net"],
  },
};

module.exports = nextConfig;
