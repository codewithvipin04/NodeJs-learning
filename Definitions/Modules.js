/* What is Modules in NodeJs ?
   1. A module is an encapsulated and reusable chunk of code that has it's own context.
   2. In NodeJs each file treated as separate module.

   Types of Modules:
   1. Local Modules - module that we create in our application.
   2. built-in modules - modules that NodeJs ships with out of the box.
   3. Third party modules - modules written by other developers that 
      we can use in our applications.

   Common JS:
   1. common js is a standard that states how a modules should be 
      structured and shared. 
   2. Nodejs adopted CommonJs when it started out an is what you will 
      see in the code bases.    
*/

/* Module scope summary:
   1. each loaded module in Nodejs is wrapped with an IIFE, that provides
       private scoping of code.
   2. IIFE allow you to repeat variable or function names without any conflict.  
*/