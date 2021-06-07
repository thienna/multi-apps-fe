module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'], // preset react for process jsx syntax, preset env for es other versions > es 2015
                        plugins: ['@babel/plugin-transform-runtime'] // allow some features for project inside browser, such as async/await...
                    }
                }
            }
        ]
    }
}
