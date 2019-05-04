const CONSTRUCTOR_CONFIG = {
  // Can't think of a case where properties of the prototype need to modified from the outside
  writable: false,
  // Can't think of a case where Object.keys or a for...in loop will be used on the prototype
  enumerable: false,
  configurable: true
}

export default CONSTRUCTOR_CONFIG;
