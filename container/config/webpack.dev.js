const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    output: {
        publicPath: 'http://localhost:8080/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'containerModule',
            remotes: {
                marketing: 'marketingModule@http://localhost:8081/remoteEntry.js',
                auth: 'authModule@http://localhost:8082/remoteEntry.js',
                dashboad: 'dashboardModule@http://localhost:8083/remoteEntry.js',
            },
            shared: packageJson.dependencies
        }),
    ]
}

module.exports = merge(commonConfig, devConfig)
