/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable image optimization to fix loading issues
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  swcMinify: true,
  // Enable static optimization
  output: 'standalone',
  // Optimize package imports
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    optimizeCss: true,
  },
  // Headers for caching and security
  async headers() {
    return [
      {
        // Apply to all routes except _next/static and _next/image
        source: '/((?!_next/static|_next/image).*)',
        headers: [
          // Removed Cache-Control from here to prevent caching HTML incorrectly
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'", // 'unsafe-eval' needed for Next.js, 'unsafe-inline' for inline scripts
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com", // 'unsafe-inline' needed for Tailwind CSS
              "img-src 'self' data: blob: https: http: http://localhost:* https://images.pexels.com https://images.unsplash.com https://picsum.photos", // Allow all images
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https: http://localhost:* ws://localhost:* wss://localhost:*", // Allow all HTTPS connections for image optimization
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
              // Note: upgrade-insecure-requests and HSTS removed for localhost compatibility
            ].join('; '),
          },
        ],
      },
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          // No CSP restrictions on image optimization route - it needs full access
        ],
      },
      {
        source: '/_next/static/:path*', // Apply to all static assets
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

