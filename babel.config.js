/** Defining the presets */
const presets = [];

/** Defining presets */
const PRESET_ENV = '@babel/env';
const PRESET_ENV_CONFIG = {
  // Browser: "version"
  targets: "last 2 version, > 0.2%",
  useBuiltIns: "usage"
}

const presetEnvArray = [
  PRESET_ENV,
  PRESET_ENV_CONFIG
]