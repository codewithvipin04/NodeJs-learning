const fs = require("node:fs");

/* close queue CB are executed after all other queue's CB in given iteration of event loop */
const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on('close', () => {
  console.log('this is from readableStream close event');
});
setImmediate(() => console.log('this is from setImmediate'));
setTimeout(() => console.log('console from setTimeOut'), 0);
Promise.resolve().then(() => console.log('this is from Promise.resolve'));
process.nextTick(() => console.log('this is from process.nextTick'));
