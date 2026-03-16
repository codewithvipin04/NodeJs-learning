const fs = require('node:fs');
const zlib = require('node:zlib');

/* Pipes: it takes readable stream and connect to writable stream 
   Zlib: provides compression functionality, implemented using Gzip algo.
*/

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./file.txt', {
    encoding: 'utf-8',
    // highWaterMark: 2
});

readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt'));

const writableStream = fs.createWriteStream('./file2.txt.gz');

readableStream.pipe(writableStream);
// or

// readableStream.on('data', (chunk) => {
//     console.log(chunk);
//     writableStream.write(chunk);
// });
