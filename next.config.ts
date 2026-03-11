import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker"],
};

export default nextConfig;
