/* Example1: callbacks in microtask queue are executed before callbacks in timer queue.
*/
// setTimeout(() => console.log('From 1st setTimeOut'), 0);
// setTimeout(() => console.log('From 2nd setTimeOut'), 0);
// setTimeout(() => console.log('From 3rd setTimeOut'), 0);
// Promise.resolve().then(() => console.log('this is from Promise.resolve 1'));
// process.nextTick(() => console.log('this is from process.nextTick 1'));

/* Example2: callbacks are in microtask queue are executed between the execution of callbacks in timer queue.*/
setTimeout(() => console.log('From 1st setTimeOut'), 0);
setTimeout(() => {
    console.log('From 2nd setTimeOut')
    process.nextTick(() => console.log('this is inside of setTimeout'));
}, 0);
setTimeout(() => console.log('From 3rd setTimeOut'), 0);
Promise.resolve().then(() => console.log('this is from Promise.resolve 1'));
process.nextTick(() => console.log('this is from process.nextTick 1'));
