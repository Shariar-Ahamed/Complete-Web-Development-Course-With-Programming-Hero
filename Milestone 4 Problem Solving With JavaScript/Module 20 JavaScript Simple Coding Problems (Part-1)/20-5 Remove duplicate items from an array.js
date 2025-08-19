//* Remove duplicate items from an array */

/**
 * 1. Array has some duplicate elemensts
 * 2. []
 */

function noDublicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}



const eat = ['abul', 'babul', 'chabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [2, 4, 53, 64, 23, 64, 75, 32];

const uniqueArray = noDublicate(eat);
console.log(uniqueArray); //? Array(6) [ 'abul', 'babul', 'chabul', 'dabul', 'kabul', 'cabul' ]
