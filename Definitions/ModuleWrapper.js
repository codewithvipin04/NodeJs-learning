/* Module Wrapper:
   1. every module in nodejs get wrapped in IIFE before gets load.
   2. IIFE helps keep top-level variable scoped to the module, 
      rather then the global object.
   3. The IIFE that wraps each module contains 5 parameter, which are 
      pretty important for the functioning of the module.  
*/

(function (exports, require, module, __filename, __dirname) {
    const superman = 'Batman';
    console.log(superman);
})();

// __filename: file location of current module
// __dirname: directory location of current module
// module: current module