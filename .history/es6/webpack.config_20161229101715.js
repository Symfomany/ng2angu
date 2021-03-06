/**
 * https://github.com/ruanyf/webpack-demos
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin') // Simplifies creation of HTML files to serve your webpack bundles
const { getIfUtils, removeEmpty } = require('webpack-config-utils') // Utilities to help your webpack config be easier to read
const webpackValidator = require('webpack-validator') // Validate a Webpack configuration from loader & plugins used
const { resolve } = require('path') // resolve a path frm directories


module.exports = env => {
    const { ifProd, ifNotProd } = getIfUtils(env) // extraction de proptiété si on est en prod ou pas ifProd, ifDev
    const config = webpackValidator({
        entry: {
            main: './src/bootstrap.js',
            other: './src/main.ts',
            // another: './src/jsx/index.jsx',
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
                template: './src/index.html',
                inject: 'body',
            }),
        ],
        externals: {
            'jquery': 'jQuery'
        },
        module: {
            loaders: [{
                    test: /\.js(x)?$/,
                    loader: 'babel-loader?presets[]=es2015&presets[]=react'
                },
                {
                    test: /\.ts(x)?$/,
                    loaders: [
                        'react-hot-loader',
                        'babel-loader?presets[]=es2015',
                        'awesome-typescript-loader?configFileName=tsconfig.json',
                    ],
                    exclude: [/node_modules/, /\.(spec|e2e)\.ts(x?)$/],
                },
                {
                    test: /\.css$/,
                    loaders: [
                        'style-loader',
                        'css-loader?importLoaders=1',
                        'autoprefixer-loader',
                        'postcss-loader?sourceMap=inline'
                    ]
                },
                {
                    test: /\.scss$/,
                    loaders: [
                        'style-loader',
                        'css-loader',
                        'autoprefixer-loader',
                        'sass-loader'
                    ]
                },
            ]
        }

    });

    if (env.debug) {
        console.log(config)
        debugger // eslint-disable-line
    }
    return config

};