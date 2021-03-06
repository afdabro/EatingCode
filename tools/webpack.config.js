"use strict";
/*
    Webpack 2
    Reference:
    https://webpack.js.org/configuration/
*/
const webpack = require('webpack');
const path = require('path');

/*
    Replaces standard Chunkhash with md5 hash.
    Reference:
    https://github.com/erm0l0v/webpack-md5-hash
*/
const WebpackMd5Hash = require('webpack-md5-hash');

/*
    Plugin to help Html bundling
    Reference:
    https://github.com/jantimon/html-webpack-plugin
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
    Replaces strings with variables within html
    Reference:
    https://github.com/erraX/html-string-replace-webpack-plugin
*/
const HtmlStringReplace = require('html-string-replace-webpack-plugin');

/*
    Extract text from bundle
    Reference:
    https://github.com/webpack-contrib/extract-text-webpack-plugin
*/
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/*
    Enables SCSS Linting
    See the following link for Rule configuration:
    https://stylelint.io/user-guide/configuration/
    Reference:
    https://github.com/JaKXz/stylelint-webpack-plugin
*/
const StyleLintPlugin = require('stylelint-webpack-plugin');

/*
    Auto-prefix CSS
    Reference:
    https://github.com/postcss/postcss-loader
*/
const autoprefixer = require('autoprefixer');

/*
    Generates a sitemap
    Reference:
    https://github.com/schneidmaster/sitemap-webpack-plugin
    TODO: Replace with dynamic React Router based sitemap generation
*/
const SitemapPlugin = require('sitemap-webpack-plugin');
const sitePaths = [
    '/',
    '/about/'
];

const localHost = 'https://localhost:3000';
const domainHost = 'https://www.eatingcode.net';

/*
    GZip Compression
    Reference:
    https://github.com/webpack-contrib/compression-webpack-plugin
*/
const CompressionPlugin = require("compression-webpack-plugin");

const devEntry = [
    // must be first entry to properly set public path
    '../source/webpack-public-path',

    'react-hot-loader/patch',
    // activate HMR for React
    
    'webpack-dev-server/client?https://localhost:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './appLoader'
];

const prodEntry = [
    './appLoader'
];

/*
    Paths
*/
const buildPath = path.join(__dirname, '../build');
const assetsPath = path.join(__dirname, '../source/assets');
const sourcePath = path.join(__dirname, '../source');

module.exports = (isDev) => {
    /*
        Helper methods from React Starter
    */
    console.log(`isDev: ${isDev}`);
    const ifDev = then => (isDev ? then : null);
    const ifProd = then => (!isDev ? then : null);
    const nullsOut = i => i;

    const extractSass = new ExtractTextPlugin({
        filename: "[name].[contenthash].css",
        disable: false
    });

    return {
        devtool: isDev ? 'inline-source-map' : 'source-map',
        target: 'web',
        context: sourcePath,
        entry: isDev ? devEntry : prodEntry,
        output: {
            path: buildPath,
            publicPath: '/',
            filename: '[name].[hash].js'
        },
        performance: {
            hints: false
        },
        plugins: [
            new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(isDev ? 'development' : 'production') } }),
            new webpack.LoaderOptionsPlugin({
                options: {
                    debug: isDev, minimize: !isDev, postcss: [
                        autoprefixer({
                            browsers: [
                                'last 3 version',
                                'ie >= 10'
                            ],
                        }),
                    ],
                    tslint: {
                        emitErrors: true,
                        failOnHint: true
                    }
                }
            }),
            ifDev(new webpack.HotModuleReplacementPlugin()),
            ifDev(new webpack.NamedModulesPlugin()),
            ifProd(new WebpackMd5Hash()),
            extractSass,
            ifProd(new webpack.optimize.UglifyJsPlugin({ mangle: true, warnings: false, 'screw_ie8': true, conditionals: true, unused: true, comparisons: true, sourceMap: true, sequences: true, 'dead_code': true, evaluate: true, 'if_return': true, 'join_vars': true, output: { comments: false } })),
            new HtmlWebpackPlugin({
                template: 'index.html',
                favicon: 'assets/favicon.ico',
                inject: true,
                minify: {
                    removeComments: !isDev,
                    collapseWhitespace: !isDev,
                    keepClosingSlash: !isDev
                }
            }),
            new HtmlStringReplace({
                enable: true,
                patterns: [
                    {
                        match: /<!-- @host -->/ig,
                        replacement: function (match) {
                            return isDev ? localHost : domainHost;
                        }
                    },
                ]
            }),
            new HtmlStringReplace({
                enable: true,
                patterns: [
                    {
                        match: /<!-- @wss -->/ig,
                        replacement: function (match) {
                            return isDev ? 'wss://localhost:3000' : '';
                        }
                    },
                ]
            }),
            new StyleLintPlugin({
                configFile: '.stylelintrc.json',
                failOnError: true,
                syntax: 'scss',
                quiet: false
            }),
            new SitemapPlugin(domainHost, sitePaths),
            new CompressionPlugin({
                asset: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.(js|html|css)$/,
                threshold: 10240,
                minRatio: 0.8
            }),
            new webpack.NoEmitOnErrorsPlugin(),// do not emit compiled assets that include errors  
        ].filter(nullsOut),
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(tsx|ts)$/,
                    loader: 'tslint-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(tsx|ts)$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    loader: extractSass.extract({
                        use: [{
                            loader: "css-loader"
                        }, {
                            loader: "sass-loader"
                        }
                        ],
                        fallback: "style-loader"
                    })
                },
                {
                    test: /\.css$/,
                    loader: "css-loader"
                },
                {
                    test: /\.(png|jpg|wav|mp3)$/,
                    include: [assetsPath],
                    loader: 'url-loader?limit=4096'
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'url-loader?limit=4096&mimetype=application/font-woff'
                },
                {
                    test: /\.(jpe?g|png|gif)$/i,
                    loader: 'file-loader?name=images/[name].[ext]'
                },
                ifDev({
                    enforce: 'pre',
                    test: /\.(tsx|ts|js)$/,
                    use: "source-map-loader"
                })
            ].filter(nullsOut)
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.scss', 'css']
        }
    };
};
