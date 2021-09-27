import { MoneyCount } from './inc/moneyCount.class.js';


let total = 12;
let coins = [1, 2, 5, 30];

let counter = new MoneyCount(total, coins);


// console.log(counter.calcGreedy(total, coins));
// console.log(counter.calcNaiv(total, coins));

console.log(counter.calcNaiv(120, [200, 100, 50, 30]));
console.log(counter.calcGreedy(120, [200, 100, 50, 30]));







