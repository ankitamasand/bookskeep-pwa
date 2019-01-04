let path = require('path')
let webpack = require('webpack')
const HTMLWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

let publicPath = process.env.PUBLIC_PATH || '/'
let dist = process.env.DIST_DIRECTORY || 'dist'

module.exports = {
    entry: {
        bundle: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, dist),
        filename: 'js/[name].js',
        publicPath : publicPath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015', 'react', 'stage-2'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: { sourceMap: true }
                        }, {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true
                                // plugins: () => [require('autoprefixer')]
                            }
                        }, {
                            loader: "sass-loader",
                            options: { sourceMap: true }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new ExtractTextPlugin({
            filename: 'css/main.css'
        }),
        new CopyWebpackPlugin([
            {
                from: './src/manifest.json',
                to: 'manifest.json'
            },
            {
                from: './src/service-worker.js',
                to: 'service-worker.js'
            },
            {
                from: './src/images',
                to: './images'
            }
        ])
    ]
}
