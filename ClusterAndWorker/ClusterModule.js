/* 1. Node is single threaded.
   2. No matter how many Cores you have, node will use single core of you CPU.
   3. This is fine for I/O operations but if the code has long running or CPU
      intensive operations, application might struggle from performance point
      of view.
    
   Cluster Module: the cluster module enable the creation of child process (also called worker)
      that run simultaneously. 
      all created worker share the same port. 
    
   How Cluster module work:
     1. when we run our code in terminal using node <filename>, file is treated as 
        cluster master(Primary).
     2. master is only in charge of the workers. starting, stopping app etc but not execute code itself.
     3. workers are in charge of handling of incoming request, reading file etc.
     4. Each worker gets its own event loop, memory and V8 instance.      
*/