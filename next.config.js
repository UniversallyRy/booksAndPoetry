/** @type {import('next').NextConfig} */

const isDevelopment = process.env.NODE_ENV !== "production";
const rewritesConfig = isDevelopment
  ? [
      {
        // source: "/cats",
        // destination: process.env.CATS_ENDPOINT,
      },
    ]
  : [];

module.exports = {
  reactStrictMode: true,
  // rewrites: async () => rewritesConfig,
  images: {
    domains: ["unsplash.com", "books.google.com"],
  },
};
