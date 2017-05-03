"use strict";
const webpack =  require('webpack');
const webpackConfig = require('./webpack.config');
const chalk = require('chalk');


process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

let compiler = null;

try {
  compiler = webpack(webpackConfig(false));
} catch(err) {
  console.log(err);
  throw err;
}

compiler.run((err,stats) => {
  if (err) {
    console.log(chalk.red(err.message));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors)
    return jsonStats.errors.map(err => console.log(chalk.red(err)));

  if (jsonStats.hasWarning)
    jsonStats.warnings.map(warn => console.log(chalk.yellow(warn)));

  console.log(chalk.bold(`Webpack stats: ${stats}`));
  console.log(chalk.green(`Your app has been built for production and written to /build!`));

  return 0;
});