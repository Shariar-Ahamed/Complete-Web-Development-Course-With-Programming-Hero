const addNumberToLS = () => {
    const number = Math.ceil(Math.random()*10);
    console.log(number);
    localStorage.setItem('number', number)
}


// Todo Object to stringify 
const setObjectToLs = () => {
    const customer = {name: "Ripon", products: 3, price: 75} // Shwing: [object Object]
    const customerJSON = JSON.stringify(customer); // {"name":"Ripon","products":3,"price":75}
    localStorage.setItem('customer stringify', customerJSON);
}

const readObjectFromLS = () => {
    const customerJSON = localStorage.getItem('customer')
    const customer = JSON.parse(customerJSON)
    console.log( 'customer parse',customer.price)
}


function getNumberFromLS() {
    const number = localStorage.getItem('number');
    console.log('from saved local storage', number);
}