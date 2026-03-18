/* Check Queue: To queue a CB function into a check queue, we can use function call setImmediate
   setImmediate(() => {
     console.log('check queue callback');
    })
*/

const fs = require("node:fs");

/* Example1: I/O events are polled and CB function are added to I/O queue only after the I/O complete*/

// fs.readFile(__filename, () => {
//   console.log('fs.readFile console.')
// });
// Promise.resolve().then(() => console.log('this is from Promise.resolve'));
// process.nextTick(() => console.log('this is from process.nextTick'));
// setTimeout(() => console.log('console from setTimeOut'), 0);
// setImmediate(() => console.log('this is from setImmediate'));

/*Example2:  check queue CB are executed after microtask queue CB, timer queue CB 
  and I/O queue CB are executed.
  - below is example
*/
// fs.readFile(__filename, () => {
//   console.log('fs.readFile console.')
//   setImmediate(() => console.log('this is setImmediate inside of fs.readFile'));
// });
// Promise.resolve().then(() => console.log('this is from Promise.resolve'));
// process.nextTick(() => console.log('this is from process.nextTick'));
// setTimeout(() => console.log('console from setTimeOut'), 0);

/*Example3: microtask queue CB executed before I/O queue CB and before check queue CB*/

// fs.readFile(__filename, () => {
//   console.log('fs.readFile console.')
//   setImmediate(() => console.log('this is setImmediate inside of fs.readFile'));
//   process.nextTick(() => console.log('this is process.nextTick inside fs.readFile'));
//   Promise.resolve().then(() => console.log('this is Promise.resolve inside fs.readFile'));
// });
// Promise.resolve().then(() => console.log('this is from Promise.resolve'));
// process.nextTick(() => console.log('this is from process.nextTick'));
// setTimeout(() => console.log('console from setTimeOut'), 0);

/*Example4: Microtask queue CB are executed in between check queue CB's*/

setImmediate(() => console.log('console from setImmediate1'), 0);
setImmediate(() => {
    console.log('console from setImmediate2');
    process.nextTick(() => console.log('this is process.nextTick inside setImmediate2'));
    Promise.resolve().then(() => console.log('this is Promise.resolve inside setImmediate2'));
}, 0);
setImmediate(() => console.log('console from setImmediate3'), 0);

