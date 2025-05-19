/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*", // เส้นทางที่จะถูกเข้าถึงใน Next.js
  //       destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`, // URL ของ API ที่คุณต้องการ proxy
  //     },
  //   ];
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/",
        permanent: false,
      },
    ];
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
