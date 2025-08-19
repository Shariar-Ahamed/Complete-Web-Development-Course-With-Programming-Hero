//NOTE:Simple calculator to call function inside a function


//Todo:-------Calculator -------

//--Sub Function--
function add(num1, num2){
    const result = num1 + num2;
    return result;
}

function subtract(num1, num2){
    const result = num1 - num2;
    return result;
}

function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}

function devide(num1, num2){
    const result = num1 / num2;
    return result;
}


//--Main Function--
function calculator(a, b, operation){
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if (operation === 'subtract') {
        const result = subtract(a, b);
        return result;
    }
    else if (operation === 'multiply') {
        const result = multiply(a, b);
        return result;
    }
    else if (operation === 'devide') {
        return devide(a, b);
    }
    else {
        return "'Only add', 'subtract', 'multiply', 'devide'";
    }
    
}

//--Test case-
const mainResult = calculator(10, 10, 'add');
console.log('The Result is :', mainResult); //? [The Result is : 20]

console.log(calculator(100, 10, 'subtract'))    //? 90
console.log(calculator(5, 10, 'multiply'))     //? 50
console.log(calculator(10, 2, 'devide'))      //? 5