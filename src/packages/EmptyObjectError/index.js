import defineStack from '../../helpers/defineStack';

class EmptyObjectError extends Error {
  constructor(message) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(message);
    this.init(message);
  }

  init(message) {
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    // if (Error.captureStackTrace) {
    //   Error.captureStackTrace(this, CustomError);
    // }
    this.name = this.constructor.name;
    this.message = message;
    this.stack = defineStack(new Error().stack);


    // Add Custom debugging information
  }
}

export default EmptyObjectError;