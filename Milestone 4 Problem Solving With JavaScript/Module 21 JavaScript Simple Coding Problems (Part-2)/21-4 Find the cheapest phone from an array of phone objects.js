//NOTE: Find the cheapest phone from an array of phone objects


//Todo:------Number------
const price = [ 20000, 16000, 50000, 1000000, 12000, 30000, 35000]

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const cheap = getMin(price);
console.log('cheapest one is:', cheap) //? [ 'cheapest one is:', 12000 ]



//Todo:------String------
const phone = [
    { name: 'Samsung', price: 20000, camera: '12Mp', color: 'Black'},
    { name: 'Xiomi', price: 18000, camera: '12Mp', color: 'Black'},
    { name: 'Oppo', price: 30000, camera: '12Mp', color: 'Black'},
    { name: 'iPhone', price: 1000000, camera: '12Mp', color: 'Black'},
    { name: 'Walton', price: 21000, camera: '12Mp', color: 'Black'},
    { name: 'HTC', price: 27000, camera: '12Mp', color: 'Black'}
]

function getChapestPhone(phones) {
    let min = phones[0];
    for(const phone of phones) {
        if(phone.price < min.price)
            min = phone;
    }
    return min;
}


const cheap1 = getChapestPhone(phone);
console.log('Cheapest phone is: ',cheap1);  //? ['Cheapest phone is: ', { name: 'Xiomi', price: 18000, camera: '12Mp', color: 'Black' }]