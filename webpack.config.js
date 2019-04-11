const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'source-map',
    watch: true,
    module: {
        rules: [{
            test: /\.[jt]sx?$/,
            loader: 'awesome-typescript-loader'
        }]
    },
    plugins: [
        new CheckerPlugin()
    ]
};