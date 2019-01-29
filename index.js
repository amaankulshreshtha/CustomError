const styles = [
    'display: block'
    , 'background: #E91E63'
    , 'color: white'
    , 'padding: 4px'
].join(';');


function defineStack(stack) {
    // Converting the exisiting string trace into an array
    stack = stack.split('\n');
    // Removing the first 2 elements of the array
    for(let i = 0; i < 3; ++i) {
        stack.shift();
    }
    // Returning the value of this.stack to the required stack trace
    return stack.join('\n').trim();
}

const constructorConfig = {
    // Can't think of a case where properties of the prototype need to modified from the outside
    writable: false,
    // Can't think of a case where Object.keys or a for...in loop will be used on the prototype
    enumerable: false,
    configurable: true
}

function EmptyObjectError (msg) {
    this.message = msg;
    this.name = this.constructor.name;

    /* 
        Why not going with Error.captureStackTrace

        - We can't customise from which row of the stack do we want to see the errors.
        - First row will be the EmptyObjectError function
        - Second row will be the helper function in which we are utilising the custom error function
    */

   let stack = new Error().stack;
    // The trace is always returned in the form of a string
    if (typeof stack === 'string') {
        this.stack = defineStack(stack);
    } else {
        /* 
            This will call the inbuilt trace method
            - The second argument omits the current function from generated stack trace
            - Because of the constructor passed in the prototype, `this` refers to EmptyObjectError function
            - The stack trace will however include the util method
        */
        Error.captureStackTrace(this, this.constructor)
    }
}

EmptyObjectError.prototype = Object.create(Error.prototype, {
    // Without the following constructor, `this` would refer to the Error function i.e the parent function
    constructor: Object.assign(constructorConfig, {
        value: EmptyObjectError
    })
});


function UndefinedObjectError (msg) {
    this.message = msg;
    this.name = this.constructor.name;


   let stack = new Error().stack;

    if (typeof stack === 'string') {
        this.stack = defineStack(stack);
    } else {
        Error.captureStackTrace(this, this.constructor)
    }
}

UndefinedObjectError.prototype = Object.create(Error.prototype, {
    constructor: Object.assign(constructorConfig, {
        value: UndefinedObjectError
    })
});


function getObjectKeys(obj) {
    try {

        if (obj === undefined) {
            throw new UndefinedObjectError('Passed object is undefined');
        }

        if (Object.keys(obj).length === 0) {
            throw new EmptyObjectError('Passed object is an empty object. There are no properties present inside the passed object');
        }

        return Object.keys(obj);
    } catch (err) {

        console.groupCollapsed('%c'+ err.name, styles);
        // Start grouping

        console.log('%c' + err.message, styles, '\n Passed object:', obj);
        /* 
            Both the trace and stack options look good
            - You can customise the err.stack as per requirements
            - No customisations in console.trace()
        */
        console.log(err.stack);
        // console.trace();

        // End grouping
        console.groupEnd();

    }
}

const testObj1 = undefined;
const testObj2 = {};

// Test 1
getObjectKeys(testObj1);

// Test 2
getObjectKeys(testObj2);