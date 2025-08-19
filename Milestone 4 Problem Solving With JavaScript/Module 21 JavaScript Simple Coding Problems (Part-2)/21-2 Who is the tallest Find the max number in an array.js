//NOTE: * Who is the tallest? Find the max number in an array *


//Todo:-------Max search------
function getMax(numbers){
    let updateMax = numbers[0];
    for(const num of numbers){
        if(num > updateMax){
          updateMax = num;
        }          
    }
    return updateMax;
}


const heights = [65, 66, 68, 72, 78, 60, 65, 66];

const max = getMax(heights);
console.log(max);      //? 78