const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfe-remote',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        exposes: {
          './Home': './components/Home'
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false,
            eager: true,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: false,
            eager: true,
          },
        },
        extraOptions: {
          enableHmr: true,
        },
      }),
    )
    return config
  },
}

module.exports = nextConfig
