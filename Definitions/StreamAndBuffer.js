/* Stream - a stream in sequence of data that moved from one point to 
            another over time.
   Exp - a stream of data over the internet being moved from one computer
        to another.
   Exp - a stream of data being transferred from one file to another 
        within same computer.

   Processes stream the data in chunks as they arrive instead of waiting 
   for the entire data to be available before processing.

   Stream is infect a built-in Node module which inherits from the event emitter class.

   Exp: Watching a video on u-tube.
   the data arrives in chunks and you watch in chunks while the rest of data arrives over a time.

   Types of Streams:
   1. Readable Stream
   2. Writable Stream
   3. Duplex Stream - both Readable and Writable , Exp - Sockets.
   4. Transform Stream - can modify or Transform data as It is written and read.
   Exp4: File compression - you can write compressed data and read de-compressed data.


   Buffer: 
    1. Area where people wait is nothing but buffer.
    2. Nodejs can't control the pace at which data arrives in stream.
    3. It can only decide what is the right time to send the data for processing.
    5. If there is already data processed or too little data to process, 
       Node puts the arriving data in buffer.
    6. it is intentionally small area which Node maintains in the runtime
       to process a stream of data.
       
    Exp: streaming video online
      1. if your internet connection is fast enough, the speed of the stream 
         will be fast enough to instantly fill up the buffer and send it out
         for processing.
      2. That will repeat till the stream is finished.
      3. if your internat connection is slow, after processing the first chunk
         of data that arrive, video player will show loading spinner which shows
         it is waiting for more data to arrive.  
      4. Once the buffer is filled up and data is processed, video player shows
         the video.
*/