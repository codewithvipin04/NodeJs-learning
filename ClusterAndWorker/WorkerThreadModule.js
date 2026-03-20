/* 
 1. worker_threads module enable the use of threads that execute JS in parallel.
 2. code executed in a worker thread runs in a separate child process. prevention 
    it from blocking your main application.
 3. The cluster module can be used to run multiple instance of NodeJs that can 
    distribute work.
 4. worker_thread module allow running multiple application within a single NodeJs
    instance.
 5. when process isolation is not needed, that is, No separate Node Instance of V8, 
    event loop, memory. we should use worker_thread module.
    
  Use case: resize image or videos, encrypt file.  
*/
