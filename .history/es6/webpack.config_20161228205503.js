const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin') // Simplifies creation of HTML files to serve your webpack bundles
const { getIfUtils, removeEmpty } = require('webpack-config-utils') // Utilities to help your webpack config be easier to read


module.exports = env => {
    const { ifProd, ifNotProd } = getIfUtils(env) // extraction de proptiété si on est en prod ou pas ifProd, ifDev
    const config = webpackValidator({
        entry: {
            bootstrap: './src/bootstrap.js',
            vendor: './src/vendor.js',
        },
        output: {
            filename: ifProd('bundle.[name].[chunkhash].js', 'bundle.[name].js'), // output file
            path: resolve('dist'), // directory 
            pathinfo: ifNotProd(), // Include comments with information about the modules.
        },
        devtool: 'source-map', // sourcemap or 
        plugins: [
            new webpack.optimize.CommonsChunkPlugin('vendor.js'),
            new HtmlWebpackPlugin({ // create index.html with injecting some JS, CSS
                template: './index.html',
                inject: 'head',
            }),
        ],
        externals: {
            'jquery': 'jQuery'
        },
        module: {
            loaders: [
                { test: /\.js$/, loader: 'babel-loader' }
            ]
        }

    });
};