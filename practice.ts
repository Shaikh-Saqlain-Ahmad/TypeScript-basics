console.log('hello');
let best_player=Math.random()>4?'Alex':'Max';
console.log(best_player);
let number;// type any
number='thirty';// evolved into string
number.toUpperCase();
console.log(number);
number=39;//evolved into int
number.toFixed();
console.log(number);
let age:string='sixty';//type annotations
let lifespan: number | "ongoing" | "uncertain";
lifespan = 89; // Ok
lifespan = "ongoing"; // Ok
let someString = "";
someString = ":)";
let mathematician: string|undefined;
console.log(mathematician?.length);




