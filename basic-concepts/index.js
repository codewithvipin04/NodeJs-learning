// const add = require('./add');
// require('./batman');
// require('./superman');
// const data = require('./data.json');

// console.log(data.name)

// console.log('Hello Node Js');

// const res = add(2,5);
// console.log(res);

// example of module caching.
// const SuperHero = require('./super-hero');

// console.log(SuperHero.getName());  // Batman1
// console.log(SuperHero.setName('Superman1'));
// console.log(SuperHero.getName());  //Superman1

// const newSuperHero = require('./super-hero'); // this line will not execute as will use from cashed.
// console.log(newSuperHero.getName()); //Superman1

// const batman = new SuperHero('Batman');

// console.log(batman.getName());
// console.log(batman.setName('Bruce lee'));
// console.log(batman.getName());

// const superman = new SuperHero('Superman');
// console.log(superman.getName());

// const {add, subtract} = require('./math')
// const {sum, sub} = require('./math')

// console.log(add(2,3));
// console.log(subtract(2,3));

// console.log(sum(2,5));
// console.log(sub(4,3));

const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine');

const pizzaShop = new PizzaShop();
const drink = new DrinkMachine();

pizzaShop.on('order-pizza', (size, topping) => {
   console.log(`Order received!! baking a pizza of ${size} with ${topping} topping.`);
   drink.serveDrink('large');
});

pizzaShop.order('large', 'mushroom');
pizzaShop.displayOrderNumber();




