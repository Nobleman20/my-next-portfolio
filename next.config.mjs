/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com", // Example hostname
        pathname: "/**", // Adjust based on actual image path
      },
    ],
  },
};

export default nextConfig;
