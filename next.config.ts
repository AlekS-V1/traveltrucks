import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['ftp.goit.study'],
  },
  webpack: (config) => {
    config.ignoreWarnings = [
      { message: /url\.parse/ },
    ];
    return config;
  },

};

export default nextConfig;
