import type { NextConfig } from "next";
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
const nextConfig: NextConfig = withMDX({
  /* config options here */
  reactStrictMode: true,
  images:{
    remotePatterns:[{protocol:'https',hostname:'**'}],
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});

export default nextConfig;
module.exports = nextConfig;
