//* Calculate the average of the odd numbers in an array */

/*
    1.Function takes an array as parameter
    2. Give me the avarage of the odd numbers in the array

*/

//Todo:--------odd numbers avarage--------
function oddAverage(numbers) {
    const odds = []; 
    for(const number of numbers) {
        if(number % 2 === 1){
            // console.log(numbers);
            odds.push(number);
        }
    }
    // odds is the array that coneains only the odd numbers
   //console.log(odds)
   let sum = 0;
   for(const number of odds) {
    sum = sum + number;
   }
   const count = odds.length;
   console.log(sum, count);     //? [ 242, 4 ]
   const avg = sum / count;
   return avg;
}

const numbers = [22, 43, 50, 23, 21, 155];
const avg = oddAverage(numbers);
console.log('avarage of the odd number is: ',avg);      //? [ 'avarage of the odd number is: ', 60.5 ]
