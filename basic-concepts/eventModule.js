/* 
   1. The event modules allow us to work with events in nodejs.
   2. An event is an action or occurrence that is happened in our 
      application that we can respond to.
   3. using the event module, we can dispatch our own custom events 
      and respond to those custom events in non-blocking manners.   
*/

const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on('order-pizza', (size, topping) => {
   console.log(`Order received!! baking a pizza of ${size} with ${topping} topping.`)
});

emitter.on('order-pizza', (size) => {
   if(size === 'large') {
      console.log('Serving Complementary Drink !!')
   }
});

console.log('Do work before event occur in the system!!')
emitter.emit('order-pizza', 'large', 'mushroom');