const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin') // Simplifies creation of HTML files to serve your webpack bundles

module.exports = {
    entry: {
        bootstrap: './src/bootstrap.js',
        vendor: './src/vendor.js',
    },
    output: {
        path: 'dist',
        filename: '[name].js'
    },
    devtool: 'source-map', // sourcemap or 
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor.js')
    ],
    externals: {
        'jquery': 'jQuery'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    }
};