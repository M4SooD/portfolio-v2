import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    cacheComponents: true,
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
