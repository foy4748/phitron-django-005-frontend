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
  // async headers() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       headers: [
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           value: "https://auth-test-frontend.vercel.app",
  //         },
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET,POST,PUT,DELETE,OPTIONS",
  //         },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value: "Content-Type, Authorization",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
