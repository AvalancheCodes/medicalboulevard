/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    imageSizes: [48, 64, 88, 96, 128, 256, 384, 416],
    domains: ['cdn.sanity.io']
  }
}
