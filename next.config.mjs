/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tonkeeper.com", "static.mytonwallet.io"],
  },
  eslint: {
    dirs: [],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
