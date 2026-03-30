import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  devIndicators: false,
  images: {
    domains: ['https://jjbyhdyioeilljvxscay.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jjbyhdyioeilljvxscay.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;