import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: [
        // "https://auth-test-backend.vercel.app",
        "http://localhost:3001",
      ],
    },
  },
  /* Image Related */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
    ],
  },
  /* END of Image Related */
};

export default nextConfig;
