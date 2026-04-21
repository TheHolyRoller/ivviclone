import bundleAnalyzer from '@next/bundle-analyzer'
import { buildContentSecurityPolicy } from './csp.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    qualities: [75, 95, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    const xContentTypeOptions = {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
    }

    const xFrameOptions = {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN',
    }

    const referrerPolicy = {
      key: 'Referrer-Policy',
      value: 'strict-origin-when-cross-origin',
    }

    const cspHeader = {
      key: 'Content-Security-Policy',
      value: buildContentSecurityPolicy(),
    }

    const securityHeaders = [
      cspHeader,
      xContentTypeOptions,
      xFrameOptions,
      referrerPolicy,
    ]

    return [
      {
        source: '/_next/static/:path*',
        headers: securityHeaders,
      },
      {
        source: '/_next/image',
        headers: securityHeaders,
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000',
          },
          cspHeader,
          xContentTypeOptions,
          xFrameOptions,
          referrerPolicy,
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          cspHeader,
          xContentTypeOptions,
          xFrameOptions,
          referrerPolicy,
        ],
      },
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
