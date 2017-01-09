const webpack = require('webpack');

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