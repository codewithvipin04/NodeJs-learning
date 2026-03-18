const https = require("node:https");
// const crypto = require("node:crypto");

const start = Date.now();

/* Experiment 1 Sync: every method in nodejs that has "sync" as suffix runs on main thread and is blocking. */
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// console.log(`Hash: ${Date.now() - start}`);

/*Experiment2 async:  a few async method like fs.readFile and crypto.pbkdf2 runs on 
  separate thread in libub's thread pool, they do run synchronously in their own thread
  but as far as main thread is concerned. it appears as if method is running asynchronously.
*/

// const MAX_CALLS = 2;

// for(let i = 0; i< MAX_CALLS; i++) {
//     crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
//     console.log(`Hash: ${i + 1} ${Date.now() - start}`)
//     });
// }

/*Experiment 3: with MAX_CALL 5 - 5th call takes almost double time, as it wait's thread to be free.
 it means libub's thread pool have only 4 thread. so libub can run only 4 calls parallel.
 
 run below code to understand.
*/
// const MAX_CALLS = 5;

// for(let i = 0; i< MAX_CALLS; i++) {
//     crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
//     console.log(`Hash: ${i + 1} ${Date.now() - start}`)
//     });
// }

/*Experiment 4: By increasing thread pool size on libub, we can execute multiple call asynchronously.
  exp: like below I have set 5

*/

// process.env.UV_THREADPOOL_SIZE = '5';
// const MAX_CALLS = 5;

// for(let i = 0; i< MAX_CALLS; i++) {
//     crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
//     console.log(`Hash: ${i + 1} ${Date.now() - start}`)
//     });
// }

/*Experiment 5: Increasing the thread pool can help with performance but 
  that is limited by the available number of CPU cores.

  exp: like my mac has 8 CPU cores so till limit 8 it will improve performance.
  run below example with limit 8 and with more then 8 to understand.
*/

// process.env.UV_THREADPOOL_SIZE = '12';
// const MAX_CALLS = 12;

// for(let i = 0; i< MAX_CALLS; i++) {
//     crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
//     console.log(`Hash: ${i + 1} ${Date.now() - start}`)
//     });
// }

/* Experiment 6: Although both crypto.pbkdf2 and https.request are asynchronous,
   seems https.request method doesn't use thread pool.

   https.request does not seems to affected with number of CPU core either.
*/

const MAX_CALLS = 12;

for(let i = 0; i< MAX_CALLS; i++) {
    https.request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request: ${i + 1} ${Date.now() - start}`);
      });
    })
    .end();
}