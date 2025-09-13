const handleAddProducts = () =>{
    const productEL = document.getElementById('product')
    const quantityEL = document.getElementById('quantity')
    const product = productEL.value;
    const quantity = quantityEL.value;

    // console.log('Handle add', product, quantity);

    displayProduct(product, quantity);
    addProductToCart(product, quantity);

    productEL.value='';
    quantityEL.value='';
} 

const getCard = () =>{
    const cart = {};

    return cart;
}

const addProductToCart = (product, quantity) => {
    const cart = getCard();
    cart[product] = quantity;
    console.log('Show card', cart);
}


const displayProduct = (product, quantity) => {
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`

    // Get the ul 
    const ul = document.getElementById('products-container');
    ul.appendChild(li);
}