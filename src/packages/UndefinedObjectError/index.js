import defineStack from '../../helpers/defineStack';

class UndefinedObjectError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.stack = defineStack(new Error().stack);
  }
}

export default UndefinedObjectError;
