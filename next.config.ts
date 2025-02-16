import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d493bit18e.ufs.sh",
        port: "",
      },
    ],
  },
};

export default nextConfig;
