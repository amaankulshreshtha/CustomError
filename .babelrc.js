const isTest = String(process.env.NODE_ENV) === 'test';

const presets = [];

/** Defining preset env */
const PRESET_ENV_CONFIG = {
  // Browser: "version"
  targets: 'last 2 version, > 0.2%',
  useBuiltIns: 'usage',
  loose: false,
  modules: isTest ? 'commonjs' : false,
  useBuiltIns: 'usage',
  corejs: '3'
};

const PRESET_ENV = ['@babel/preset-env', PRESET_ENV_CONFIG];

// pushing preset env in presets

presets.push(PRESET_ENV);

module.exports = {
  presets: presets
};
