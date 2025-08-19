//NOTE: (advanced) Multi-layer discount price calculation

/*
 * upto 100: --> 100
 * more than 101-200: -->90
 * more than 200: --> 70
 */


//Todo:------Discount price calculation------
function discountPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 70;
        return total;
    }
}

// Test Cases
const total = discountPrice(190);  // 100| 101-190| 191 - 200+
console.log(total);  //? 9090

console.log(discountPrice(50));    //? 50 * 100 = 5000
console.log(discountPrice(100));   //? 100 * 100 = 10000

console.log(discountPrice(150));   //? 150 * 90 = 13500
console.log(discountPrice(190));   //? 190 * 90 = 17100
console.log(discountPrice(200));   //? 200 * 90 = 18000

console.log(discountPrice(201));   //? 201 * 70 = 14070
console.log(discountPrice(250));   //? 250 * 70 = 17500
console.log(discountPrice(300));   //? 300 * 70 = 21000




//Todo:-------Layered Discount-------
/*
 * First100: --> 100
 * 101-200: -->90
 * above200: --> 70
 */

function layeredDiscountedTotal(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}


// Test cases
console.log(layeredDiscountedTotal(100));  //? 100*100 = 10000
console.log(layeredDiscountedTotal(150));  //? 100*100 + 50*90 = 14500
console.log(layeredDiscountedTotal(250));  //? 100*100 + 100*90 + 50*70 = 23500