/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["lightweight-charts"]);
const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
});

module.exports = nextConfig;
