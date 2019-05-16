import CONSTRUCTOR_CONFIG from "./config/constructorConfig";
import defineStack from "./helpers/defineStack";
import EmptyObjectError from "./packages/EmptyObjectError";

const styles = [
    'display: block'
    , 'background: #E91E63'
    , 'color: white'
    , 'padding: 4px'
].join(';');


function UndefinedObjectError(msg) {
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
    constructor: Object.assign(CONSTRUCTOR_CONFIG, {
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

        console.groupCollapsed('%c' + err.name, styles);
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