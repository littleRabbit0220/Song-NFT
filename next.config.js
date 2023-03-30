/** @type {import('next').NextConfig} */

const Dotenv = require("dotenv-webpack");
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new Dotenv());
    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["gateway.pinata.cloud"],
  },
};

module.exports = nextConfig;
