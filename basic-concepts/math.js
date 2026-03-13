// 2nd pattern
module.exports = (a, b) => a+b;
// or
const add = (a,b) => a+b;
module.exports = add;

const subtract = (a,b) => a-b;

// 3rd pattern multiple exports
module.exports = {
    add,
    subtract
};

// 4th pattern
module.exports.sum = (a,b) => a+b;
module.exports.sub = (a,b) => a-b;

// 5th pattern
exports.sumOfTwo = (a,b) => a+b;
exports.subOfTwo = (a,b) => a-b;