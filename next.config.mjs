import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias.canvas = false;
    return config;
  },
  images: {
    qualities: [25, 50, 75, 100],
  },
};

export default withNextIntl(nextConfig);
