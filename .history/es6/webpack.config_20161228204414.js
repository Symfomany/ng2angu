var webpack = require('webpack');

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
        new webpack.optimize.CommonsChunkPlugin('vendor.js')
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