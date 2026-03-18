/* Example 1: All user written synchronous JS code takes priority over 
   async code that runtime would like to execute. 
*/
// console.log('console.log 1');
// process.nextTick(() => {
//     console.log('this is from process.next');
// });
// console.log('console.log 2');

/* Example 2: All callbacks in nextTick queue are executed before callbacks in promise queue.
   Priority: nextTick queue > promise queue
*/
// Promise.resolve().then(() => console.log('this is from Promise.resolve 1'));
// process.nextTick(() => console.log('this is from process.nextTick 1'));

// Example 3: 
process.nextTick(() => console.log('this is from process.nextTick 1'));
process.nextTick(() => {
    console.log('this is from process.nextTick 2');
    process.nextTick(() => console.log('this is inner nextTick inside nextTick'));
});
process.nextTick(() => console.log('this is from process.nextTick 3'));

Promise.resolve().then(() => console.log('this is from Promise.resolve 1'));
Promise.resolve().then(() => {
    console.log('this is from Promise.resolve 1');
    process.nextTick(() => console.log('this is inner nextTick inside promise block'));
});
Promise.resolve().then(() => console.log('this is from Promise.resolve 3'));

