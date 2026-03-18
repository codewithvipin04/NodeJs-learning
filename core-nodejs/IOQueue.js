/* Example1: callbacks in microtask queue executed before callbacks in I/O queue*/

const fs = require("node:fs");

// fs.readFile(__filename, () => {
//   console.log('fs.readFile console.')
// });
// Promise.resolve().then(() => console.log('this is from Promise.resolve'));
// process.nextTick(() => console.log('this is from process.nextTick'));

/* Example2: when running setTimeOut with Oms delay and I/O async method, the order of execution can never e guarantee 
   - run below code multiple time to understand
*/

// setTimeout(() => console.log('console from setTimeOut'), 0);
// fs.readFile(__filename, () => {
//   console.log('fs.readFile console.')
// });

/* Example3: I/O queue CB are executed after microtask queue CB and Timer queue CB*/

fs.readFile(__filename, () => {
  console.log('fs.readFile console.')
});
Promise.resolve().then(() => console.log('this is from Promise.resolve'));
process.nextTick(() => console.log('this is from process.nextTick'));
setTimeout(() => console.log('console from setTimeOut'), 0);

