const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const INITIAL_MESSAGE = '✨  RUNNING INITIAL BUILD 🔥  🚀'

console.log('\n----------------------------------------------------------------------------\n');
console.log('                 ', INITIAL_MESSAGE);
console.log('\n----------------------------------------------------------------------------\n');

const WEBPACK_CONFIG = {};
const SRC_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const OUTPUT_DIR_ASSETS = path.resolve(OUTPUT_DIR, 'assets');

// DEFINING WEBPACK MODE🚫🐛
WEBPACK_CONFIG.mode = 'development';

// DEFINING ENTRY POINT ✅
const entry = {
  app: [path.resolve(SRC_DIR, 'index.js')]
};
WEBPACK_CONFIG.entry = entry;

// DEFINING OUPUT ⚡️
const output = {
  filename: '[name].bundle.js',
  path: OUTPUT_DIR,
  publicPath: OUTPUT_DIR_ASSETS
};

WEBPACK_CONFIG.output = output;

// DEFINING MODULE PROPERTY 🤩
WEBPACK_CONFIG.module = {};

// DEFINING MODULE RULES, CONFIGURING LOADERS INSIDE RULES 😎🤘🏻
WEBPACK_CONFIG.module.rules = [];


// DEFINING THE BABEL LOADER FOR JS 👌🏻⭐️
WEBPACK_CONFIG.module.rules.push({
  test: '/\.js$/',
  include: [SRC_DIR],
  loader: 'babel-loader'
});

// DEFINING PLUGINS 📦
WEBPACK_CONFIG.plugins = [];

WEBPACK_CONFIG.plugins.push(new CleanWebpackPlugin({
  verbose: true
}))

// SETTING SOURCEMAP ⚙️
WEBPACK_CONFIG.devtool = 'source-map';

// EXPORTING THE WEBPACK CONFIG 🎉🎁
module.exports = WEBPACK_CONFIG;