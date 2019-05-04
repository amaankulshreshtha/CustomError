import { defineStack } from './helpers';

class EmptyObjectError extends Error {
  constructor(message) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(message); // Maintains proper stack trace for where our error was thrown (only available on V8)
    // if (Error.captureStackTrace) {
    //   Error.captureStackTrace(this, CustomError);
    // }

    this.name = this.constructor.name;
    this.message = message;
    this.stack = defineStack(new Error().stack); // Custom debugging information
  }

}

export default EmptyObjectError;
/*
  function EmptyObjectError (msg) {
    this.message = msg;
    this.name = this.constructor.name;

    //
    //    Why not going with Error.captureStackTrace
    //
    //    - We can't customise from which row of the stack do we want to see the errors.
    //    - First row will be the EmptyObjectError function
    //    - Second row will be the helper function in which we are utilising the custom error function
    //

   let stack = new Error().stack;
    // The trace is always returned in the form of a string
    if (typeof stack === 'string') {
        this.stack = defineStack(stack);
    } else {
        //
        //    This will call the inbuilt trace method
        //    - The second argument omits the current function from generated stack trace
        //    - Because of the constructor passed in the prototype, `this` refers to EmptyObjectError function
        //    - The stack trace will however include the util method
        //
        Error.captureStackTrace(this, this.constructor)
    }
}

EmptyObjectError.prototype = Object.create(Error.prototype, {
    // Without the following constructor, `this` would refer to the Error function i.e the parent function
    constructor: Object.assign(constructorConfig, {
        value: EmptyObjectError
    })
});
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FbXB0eU9iamVjdEVycm9yLmpzIl0sIm5hbWVzIjpbImRlZmluZVN0YWNrIiwiRW1wdHlPYmplY3RFcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwibmFtZSIsInN0YWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxXQUFULFFBQTRCLFdBQTVCOztBQUVBLE1BQU1DLGdCQUFOLFNBQStCQyxLQUEvQixDQUFxQztBQUNuQ0MsRUFBQUEsV0FBVyxDQUFDQyxPQUFELEVBQVU7QUFDbkI7QUFDQSxVQUFNQSxPQUFOLEVBRm1CLENBSW5CO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQUtDLElBQUwsR0FBWSxLQUFLRixXQUFMLENBQWlCRSxJQUE3QjtBQUNBLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtFLEtBQUwsR0FBYU4sV0FBVyxDQUFDLElBQUlFLEtBQUosR0FBWUksS0FBYixDQUF4QixDQVZtQixDQVduQjtBQUNEOztBQWJrQzs7QUFnQnJDLGVBQWVMLGdCQUFmO0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVTdGFjayB9IGZyb20gJy4vaGVscGVycyc7XG5cbmNsYXNzIEVtcHR5T2JqZWN0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICAvLyBQYXNzIHJlbWFpbmluZyBhcmd1bWVudHMgKGluY2x1ZGluZyB2ZW5kb3Igc3BlY2lmaWMgb25lcykgdG8gcGFyZW50IGNvbnN0cnVjdG9yXG4gICAgc3VwZXIobWVzc2FnZSk7XG5cbiAgICAvLyBNYWludGFpbnMgcHJvcGVyIHN0YWNrIHRyYWNlIGZvciB3aGVyZSBvdXIgZXJyb3Igd2FzIHRocm93biAob25seSBhdmFpbGFibGUgb24gVjgpXG4gICAgLy8gaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgLy8gICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBDdXN0b21FcnJvcik7XG4gICAgLy8gfVxuICAgIHRoaXMubmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSBkZWZpbmVTdGFjayhuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgLy8gQ3VzdG9tIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcHR5T2JqZWN0RXJyb3I7XG5cbi8qXG4gIGZ1bmN0aW9uIEVtcHR5T2JqZWN0RXJyb3IgKG1zZykge1xuICAgIHRoaXMubWVzc2FnZSA9IG1zZztcbiAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAvL1xuICAgIC8vICAgIFdoeSBub3QgZ29pbmcgd2l0aCBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZVxuICAgIC8vXG4gICAgLy8gICAgLSBXZSBjYW4ndCBjdXN0b21pc2UgZnJvbSB3aGljaCByb3cgb2YgdGhlIHN0YWNrIGRvIHdlIHdhbnQgdG8gc2VlIHRoZSBlcnJvcnMuXG4gICAgLy8gICAgLSBGaXJzdCByb3cgd2lsbCBiZSB0aGUgRW1wdHlPYmplY3RFcnJvciBmdW5jdGlvblxuICAgIC8vICAgIC0gU2Vjb25kIHJvdyB3aWxsIGJlIHRoZSBoZWxwZXIgZnVuY3Rpb24gaW4gd2hpY2ggd2UgYXJlIHV0aWxpc2luZyB0aGUgY3VzdG9tIGVycm9yIGZ1bmN0aW9uXG4gICAgLy9cblxuICAgbGV0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgLy8gVGhlIHRyYWNlIGlzIGFsd2F5cyByZXR1cm5lZCBpbiB0aGUgZm9ybSBvZiBhIHN0cmluZ1xuICAgIGlmICh0eXBlb2Ygc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuc3RhY2sgPSBkZWZpbmVTdGFjayhzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgVGhpcyB3aWxsIGNhbGwgdGhlIGluYnVpbHQgdHJhY2UgbWV0aG9kXG4gICAgICAgIC8vICAgIC0gVGhlIHNlY29uZCBhcmd1bWVudCBvbWl0cyB0aGUgY3VycmVudCBmdW5jdGlvbiBmcm9tIGdlbmVyYXRlZCBzdGFjayB0cmFjZVxuICAgICAgICAvLyAgICAtIEJlY2F1c2Ugb2YgdGhlIGNvbnN0cnVjdG9yIHBhc3NlZCBpbiB0aGUgcHJvdG90eXBlLCBgdGhpc2AgcmVmZXJzIHRvIEVtcHR5T2JqZWN0RXJyb3IgZnVuY3Rpb25cbiAgICAgICAgLy8gICAgLSBUaGUgc3RhY2sgdHJhY2Ugd2lsbCBob3dldmVyIGluY2x1ZGUgdGhlIHV0aWwgbWV0aG9kXG4gICAgICAgIC8vXG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpXG4gICAgfVxufVxuXG5FbXB0eU9iamVjdEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlLCB7XG4gICAgLy8gV2l0aG91dCB0aGUgZm9sbG93aW5nIGNvbnN0cnVjdG9yLCBgdGhpc2Agd291bGQgcmVmZXIgdG8gdGhlIEVycm9yIGZ1bmN0aW9uIGkuZSB0aGUgcGFyZW50IGZ1bmN0aW9uXG4gICAgY29uc3RydWN0b3I6IE9iamVjdC5hc3NpZ24oY29uc3RydWN0b3JDb25maWcsIHtcbiAgICAgICAgdmFsdWU6IEVtcHR5T2JqZWN0RXJyb3JcbiAgICB9KVxufSk7XG4qLyJdfQ==