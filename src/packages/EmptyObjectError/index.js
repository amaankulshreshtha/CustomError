import defineStack from '../../helpers/defineStack';

class EmptyObjectError extends Error {
  constructor(message) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(message);
    this.name = this.constructor.name;
    this.stack = defineStack(new Error().stack);
  }
}

export default EmptyObjectError;
