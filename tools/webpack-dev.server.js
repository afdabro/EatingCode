"use strict";
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const chalk = require('chalk');
const open = require('open');

const port = 3000;

console.log(chalk.blue('Starting WebpackDevServer debug'));

try {

    const compiler = webpack(config(true));

    const server = new WebpackDevServer(compiler, {
        contentBase: './build',
        hot: true,
        historyApiFallback: {
            rewrites: [
                // shows favicon
                { from: /favicon.ico/, to: 'https://localhost:3000/favicon.ico' }
            ]
        },
        inline: true,
        https: true,
        stats: { colors: true, assets: false, source: false, timings: true, hash: false, version: false, chunkModules: false, chunkOrigins: true },
    });

    server.listen(port, 'localhost', () => {
        console.log(chalk.green(`Listening on Port: ${port}`));
        open(`https://localhost:${port}`);
    });
} catch (ex) {
    console.log(chalk.red(`The following error has ocurred: ${ex}`));
}
