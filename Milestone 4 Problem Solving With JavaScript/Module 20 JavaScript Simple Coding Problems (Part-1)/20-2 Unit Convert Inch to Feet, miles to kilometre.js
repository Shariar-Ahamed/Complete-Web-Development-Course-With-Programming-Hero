//* Unit Convert Inch to Feet, miles to kilometre */

//Todo:------inch feet convert------
// 12 inch 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

const ShariarHeight = inchToFeet(75);
console.log(ShariarHeight)  //? 6.25



//Todo:------inchToFeet------
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const isRemaining = inch % 12;
    const result =  feetNumber + ' Feet ' + isRemaining + ' Inch ';
    return result;

}

const RiponHeight = inchToFeet2(75);
console.log(RiponHeight)      //? '6 Feet 3 Inch'



//Todo:------Kilometre to mile convert------
function kilometreToMile(kilometre){
    const mile = kilometre * 0.621371;
    return mile;
}

const inputKilometre = kilometreToMile(10);
console.log(inputKilometre);    //? 6.21371