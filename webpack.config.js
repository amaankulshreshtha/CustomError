const path = require('path');

const WEBPACK_CONFIG = {};
const SRC_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const OUTPUT_DIR_ASSETS = path.resolve(OUTPUT_DIR, 'assets');

// DEFINING WEBPACK MODE
WEBPACK_CONFIG.mode = 'development';

// DEFINING ENTRY POINT
const entry = { 
  app: [ path.resolve(SRC_DIR, 'index.js') ]
};
WEBPACK_CONFIG.entry = entry;

// DEFINING OUPUT
const output = {
  filename: '[name].bundle.js',
  path: OUTPUT_DIR,
  publicPath: OUTPUT_DIR_ASSETS
};

WEBPACK_CONFIG.output = output;




// EXPORTING THE WEBPACK CONFIG
module.exports = WEBPACK_CONFIG;