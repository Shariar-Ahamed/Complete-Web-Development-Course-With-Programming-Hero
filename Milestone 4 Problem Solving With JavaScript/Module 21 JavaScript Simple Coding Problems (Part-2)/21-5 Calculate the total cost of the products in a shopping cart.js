//NOTE: Calculate the total cost of the products in a shopping cart


//Todo:------Total shoppoing Sum:------
const products = [
    {name: 'shampoo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 700},
    {name: 'pant', price: 1200}
]

function getShoppingTotal (products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}

const totalSum = getShoppingTotal(products);
console.log(totalSum, 'TK'); //? [ 2300, 'TK' ]




//Todo:------Total shoppoing Sum and quantity:------
const products2 = [
    {name: 'shampoo', price: 300, quantity: 2},
    {name: 'chiruni', price: 100, quantity: 3},
    {name: 'shirt', price: 700, quantity: 5},
    {name: 'pant', price: 1200, quantity: 1}
]

function cartTotal(products2){
    let total = 0;
    for(const product2 of products2){
        const thisProductCost = product2.price * product2.quantity;
        total = total + thisProductCost; 
    } 
    return total;
}

const shoppongCost = cartTotal(products2);
console.log(shoppongCost);  //? 5600