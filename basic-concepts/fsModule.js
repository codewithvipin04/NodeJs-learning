/* 
File System(FS) module: it allow to work with file system on your computer.
*/

const fs = require('node:fs/promises');

async function readFile() {
    try {
        const data = await fs.readFile('./file.txt', 'utf-8');
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

readFile();

// or

fs.readFile('./file.txt', 'utf-8')
.then(data => console.log(data))
.catch(error => console.log(error));









// const fs = require('node:fs');

// file read 
// console.log('first');
// // synchronous way
// const fileContents = fs.readFileSync('./file.txt', 'utf-8')
// console.log(fileContents);

// console.log('second');
// // asynchronous
// fs.readFile('./file.txt', 'utf-8', (error, data) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// });
// console.log('third');

// file write

// fs.writeFileSync('./greet.txt', 'Hello World !!');

// fs.writeFile('./greet.txt', ' Hello Vipin !!', {flag: "a" }, (error) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log('Success !!');
//     }
// });