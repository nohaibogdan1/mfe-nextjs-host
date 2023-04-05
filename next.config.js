const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'my-app',
          remotes: {
            checkout: "checkout@https://nextjs-mfe-f3bz.vercel.app/_next/static/chunks/remoteEntry.js",
          },
          filename: 'static/chunks/remoteEntry.js',
        }),
      );
    }

    return config;
  },
}

module.exports = nextConfig

