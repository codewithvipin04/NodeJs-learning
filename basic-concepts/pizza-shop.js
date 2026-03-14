const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }
    order() {
        this.orderNumber++;
        this.emit('order-pizza', size, toping);
    }
    displayOrderNumber() {
        console.log(`Your order number is ${this.orderNumber}`)
    }
}

module.exports = PizzaShop;