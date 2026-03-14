import { add, subtract } from './math-esm.mjs';
//or
import math from './math-esm.mjs';

const { add, subtract } = math;

console.log(add(5,3));
console.log(subtract(6,2));