# Errors

---

## Notes

The prototype of Error can't be modified. There are a lot of use cases for making custom
errors.

Explaining the Basic Custom Error Working

- The "pseudocode" for the built-in Error class defined by JavaScript goes something like this

```javascript
class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error"; // (different names for different built-in error classes)
    this.stack = <nested calls>; // non-standard, but most environments support it
  }
}
```

```javascript
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
```

- `super(message)` calls the `Error` function that sets the message property.
  It would be **similar** to:

```javascript
function MyError(message) {
  Error.call(this, message);
}
```

> PS: It's similar and not exact because the `message` property on the `Error` function is on it's prototype in the native code implementation.

---

## List of Errors

Following is the list of Custom Errors that are implemented

- [x] Empty Object Error - Throws error for **empty object**.
- [x] Undefined Object Error - Throws error for **undefined object**.
- [ ] Validation Error - Throws error for **missing object properties**.
- [ ] HTTP Error - Throws error for any **failure in an http request**.
- [ ] Undefined Value Error - Throws error for any **unexpected undefined value**.
- [ ] Mutation Error - Throws error when **trying to change an immutable variable**.

More to come ...
