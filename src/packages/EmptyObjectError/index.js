class EmptyObjectError extends Error {
  constructor(message) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(message);
    this.name = this.constructor.name;
  }
}

export default EmptyObjectError;
