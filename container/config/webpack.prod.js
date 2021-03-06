const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/' // for aws s3 cloud front path: pre append path to filename
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'containerModule',
            remotes: {
                marketing: `marketingModule@${domain}/marketing/latest/remoteEntry.js`,
                auth: `authModule@${domain}/auth/latest/remoteEntry.js`,
                dashboard: `dashboardModule@${domain}/dashboard/latest/remoteEntry.js`,
            },
            shared: packageJson.dependencies,
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)
