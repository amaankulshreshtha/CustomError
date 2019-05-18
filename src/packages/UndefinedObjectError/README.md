# Undefined Object Error

## Simplified using ES5

```javascript
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
```