/* 1. https.request is network input/output operation and not a CPU bound operation.
   2. it does not use the libub thread pool.
   3. Libub instead delegate work to the operating system kernel, and whenever
      possible it will poll the kernel and see if the request is completed.

   Livub and Async Method Summary:

   1. in Node Js Asynchronous methods are handled by libub.
   2. They are handled in two diff ways.
    - native async mechanism and Thread pool.

   * whenever possible, libub will use the native async mechanism in the 
     OS so as avoid blocking the main thread.
   * since this the part of kernel, there is diff mechanism for each OS, 
     we have Epoll for Linux, Kqueue for MacOS and IO completion port on window.
   * Relying on native async mechanism makes node scalable as only limitation is
     the OS kernel.
   * Example of this type is I/O operation.
   * If there is no native async support and the task id File I/O or CPU intensive,
     libub use the thread pool to avoid blocking the main thread.
   *          
*/