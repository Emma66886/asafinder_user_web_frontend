/** @type {import('next').NextConfig} */
// const withTM = require("next-transpile-modules")(["lightweight-charts"]);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
