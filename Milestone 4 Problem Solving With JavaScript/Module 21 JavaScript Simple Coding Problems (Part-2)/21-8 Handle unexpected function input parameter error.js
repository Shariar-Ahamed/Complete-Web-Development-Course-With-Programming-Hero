//NOTE: Handle unexpected function input parameter error


//Todo:-------Unexpected Function-------

function multiply (num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a number';
    }
    const mul = num1 * num2;
    return mul;
}

// const result = multiply(5*2, 5+5);
 const result = multiply(5, '2');
console.log(result);    //? 'Please provide a number'




//Todo:-------Unexpected Function-------
function fullName (first, second) {
    if (typeof first !== 'string'){
        return 'Please provide string value';
    }
    else if (typeof second !== 'string'){
        return 'Please provide string value';
    }
    else {
        const full = first + ' ' + second;
        return full;
    }

}

const name = fullName('Emon', 2);
console.log(name);    //? 'Please provide string value'




///Todo:-------Object-------
function getPrice(product) {
    if (typeof product !== 'object'){
        return 'Please provide an object'
    }
    const price = product.price;
    return price;
}

// const price = getPrice({name:'Phone', price: 35 , color: 'Blue'});
const price = getPrice(35);
console.log(price)    //? Please provide an object




//Todo:-------Array-------
function getSecond(numbers){
    if (Array.isArray(numbers) === false){
        return 'Please provide an array';
    }
    const second = numbers[1];
    return second;
}

// const second = getSecond([50, 15 , 25 ]);
const second = getSecond(10);
console.log(second);    //? 'Please provide an array'