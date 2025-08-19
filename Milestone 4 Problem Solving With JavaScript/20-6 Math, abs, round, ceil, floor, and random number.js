//* Math, abs, round, ceil, floor, and random number */ 

//Todo: ------Math min,max------
const min = Math.min(50, 20, 1, 25, 125, -100);
const max = Math.max(50, 20, 1, 25, 125, -100);

console.log(min); //? -100
console.log(max); //? 125

//Todo: ------Math PI------
console.log(Math.PI) //? 3.141592653589793

//Todo: ------Math Always Positive------
console.log(Math.abs(-100)) //? 100
console.log(Math.abs(100)) //? 100
console.log(Math.abs(5-10)) //? 5


//Todo: ------Math Round------
console.log(Math.round(2.01)) //? 2
console.log(Math.round(2.50)) //? 3

console.log(Math.floor(2.99)) //? 2 "___"
console.log(Math.ceil(2.01)) //? 3  "```"


//Todo: Important
console.log(Math.random()*10); //? 7.56...

let any = Math.round(Math.random()*100);
console.log(any); // 98  (Output: Random number between 0 and 1) //? 80
