/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/skytunnel-site",
  assetPrefix: "/skytunnel-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
