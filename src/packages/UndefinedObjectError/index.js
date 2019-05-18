import defineStack from "../../helpers/defineStack";


class UndefinedObjectError extends Error {
  constructor(message) {
    super(message);

    this.init(message);
  }

  init(message) {
    // Setting the name of the error
    this.name = this.constructor.name;
    this.message = message;
    this.stack = defineStack(new Error().stack);

    // Add Custom Debugging Information
  }
}

export default UndefinedObjectError;