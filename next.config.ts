import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    ppr: 'incremental',
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
