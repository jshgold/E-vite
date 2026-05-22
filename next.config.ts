import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 로컬 이미지 + 추후 외부 이미지 허용 시 domains 추가
    unoptimized: false,
  },
};

export default nextConfig;
