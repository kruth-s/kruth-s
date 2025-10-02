import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** @type {import('next').NextConfig} */
  output: "export",
  images: { unoptimized: true }
};

export default nextConfig;
