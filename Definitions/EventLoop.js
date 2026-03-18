/* Execution Order: 
   - user written synchronous javascript code takes priority over async code 
      that runtime would like to execute.
   - Only after the call stack is empty Event loop comes into Picture.

   1. Any callbacks in the micro task queues are executed. first, tasks in 
      the nextTick queue and only then tasks in the promise queue.
   2. All callbacks within the Time queue are executed.
   3. callbacks in the microtask queue if present are executed. Again, first
      task in the nextTick queue and then task in the promise queue.
   4. All callbacks within the I/O queue are executed.
   5. callbacks in the microtask queues if present are executed. nextTic queue
      followed by promise queue.
   6. All callback in the check queue are executed.
   7. callbacks in the microtask queues if present are executed. Again, first tasks 
      in the nextTick queue and then tasks in the promise queue.
   8. All callback in the close queue are executed.
   9. For one final time in the same loop, the micro task queues are executed. netTick
      queue followed by promise queue.

   if there are more callbacks to be process, the loop is kept alive for one more run
   and the same steps repeated.
   
   and the other hand if all callbacks are executed and there is no more code to
   process, the Event loop exit.

*/