const handleAddProducts = () =>{
    const productEL = document.getElementById('product')
    const quantityEL = document.getElementById('quantity')
    const product = productEL.value;
    const quantity = parseInt(quantityEL.value);

    // console.log('Handle add', product, quantity);

    displayProduct(product, quantity);
    addProductToCart(product, quantity);

    productEL.value='';
    quantityEL.value='';
} 

const getCard = () =>{
    let cart = {};

//* Multiple value add:
/**
 * to get object/array from the local storage 
 * 1. get the item from the local storage and it will be in JSON string
 * 2. convert the JSON string to js object by using JSON.parse
 */

const cartJSON = localStorage.getItem('cart');
    if(cartJSON){
        cart = JSON.parse(cartJSON)
    }
    return cart;
}

const addProductToCart = (product, quantity) => {
    const cart = getCard();

    if(cart[product]){
        cart[product] = cart[product] + quantity
    }
    else{
        cart[product] = quantity;
    }


    console.log('Show card', cart);

// Note:
/**
 * To save Object/array in the Local storage
 * 1. covert the object to JSON string by using JSON.stringify
 * 2. localstorage.setItem()
 */
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON);
}


const displayProduct = (product, quantity) => {
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`

    // Get the ul 
    const ul = document.getElementById('products-container');
    ul.appendChild(li);
}


// display products from stored Lical storage
const displayStoredProducts = () => {
    const cart = getCard();
    for(const product in cart){
        const quantity = cart[product];
        console.log(product, quantity);
        displayProduct(product, quantity)
    }
}

displayStoredProducts()