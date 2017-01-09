const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin') // Simplifies creation of HTML files to serve your webpack bundles

module.exports = {
    entry: {
        app: './src/bootstrap.js',
        vendor: './src/vendor.js',
    },
    output: {
        path: 'dist',
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor.js'),
        new HtmlWebpackPlugin({ // create index.html with injecting some JS, CSS
            cache: true,
            template: './index.html',
            inject: 'head',
            title: 'Page Render by Server',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        }),
    ],
    externals: {
        'jquery': 'jQuery'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader' }
        ]
    }
};