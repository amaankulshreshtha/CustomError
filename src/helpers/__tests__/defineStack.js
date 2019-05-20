import defineStack from '../defineStack';

test('trims the stack and returns proper information', () => {
  const stack = `at getObjectKeys (http://127.0.0.1:5500/dist/app.bundle.js:258:13)
  at Module../src/index.js (http://127.0.0.1:5500/dist/app.bundle.js:163:61)
  at __webpack_require__ (http://127.0.0.1:5500/dist/app.bundle.js:20:30)
  at Object.0 (http://127.0.0.1:5500/dist/app.bundle.js:294:18)
  at __webpack_require__ (http://127.0.0.1:5500/dist/app.bundle.js:20:30)
  at http://127.0.0.1:5500/dist/app.bundle.js:84:18
  at http://127.0.0.1:5500/dist/app.bundle.js:87:10`;

  const trimmedStack = `at Object.0 (http://127.0.0.1:5500/dist/app.bundle.js:294:18)
  at __webpack_require__ (http://127.0.0.1:5500/dist/app.bundle.js:20:30)
  at http://127.0.0.1:5500/dist/app.bundle.js:84:18
  at http://127.0.0.1:5500/dist/app.bundle.js:87:10`;

  expect(defineStack(stack)).toBe(trimmedStack);
});
