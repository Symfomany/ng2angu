/**
 * Utilisation de PLugins & Loader de Webpack
 */

/* eslint no-console:"off" */
const { resolve } = require('path') // resolve a path frm directories
const webpack = require('webpack') // webpack module
const ProgressBarPlugin = require('progress-bar-webpack-plugin') //Progress Bar on Tasks 
const HtmlWebpackPlugin = require('html-webpack-plugin') // Simplifies creation of HTML files to serve your webpack bundles
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin') // cache in manifest.js
const ExtractTextPlugin = require('extract-text-webpack-plugin') // Extract text from bundle into a file.
const webpackValidator = require('webpack-validator')
const { getIfUtils, removeEmpty } = require('webpack-config-utils') // Utilities to help your webpack config be easier to read
const OfflinePlugin = require('offline-plugin')

module.exports = env => {
    const { ifProd, ifNotProd } = getIfUtils(env) // extraction de proptiété si on est en prod ou pas ifProd, ifDev
    const config = webpackValidator({
        context: resolve('src'), // directory
        entry: {
            app: './bootstrap.js', // point of entry
        },
        output: {
            filename: ifProd('bundle.[name].[chunkhash].js', 'bundle.[name].js'),
            path: resolve('dist'),
            pathinfo: ifNotProd(),
        },
        devtool: ifProd('source-map', 'eval'),
        module: {
            loaders: [
                { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        fallbackLoader: 'style',
                        loader: 'css',
                    })
                },
            ],
        },
        plugins: removeEmpty([
            new ProgressBarPlugin(), // progress bar
            new ExtractTextPlugin(ifProd('styles.[name].[chunkhash].css', 'styles.[name].css')),
            ifProd(new InlineManifestWebpackPlugin()), //cache with Manifest.json to save http request
            ifProd(new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest'],
            })),
            new HtmlWebpackPlugin({ // create index.html with inject some JS, CSS
                template: './index.html',
                inject: 'head',
            }),
            new OfflinePlugin(), //  provide offline experience for webpack projects - ServiceWorker and AppCache 
            new webpack.DefinePlugin({ // defins somes constantes for Node NODE_ENV
                'process.env': {
                    NODE_ENV: ifProd('"production"', '"development"')
                }
            }),
        ]),
    })
    if (env.debug) {
        console.log(config)
        debugger // eslint-disable-line
    }
    return config
}