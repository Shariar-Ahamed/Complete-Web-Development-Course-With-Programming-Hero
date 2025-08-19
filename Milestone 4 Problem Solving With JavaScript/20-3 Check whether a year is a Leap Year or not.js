//* Check whether a year is a Leap Year or not */

// Year will be leap year if the year is divisible by 4
//Todo:------leap year half-truth------
function isLeapYear (year) {
    if(year % 4 === 0){
        console.log("Yes! the year is leap year")
        return true;
    }
    else{
        console.log("No! the year is no leap year")
        return false;
    }
    
}

const isResult = isLeapYear(2000);
console.log(isResult);


/*
    1. Those year that is not divisile by 100, if the year is divisible by 4: then it will be a leap year
    2. if the year is divisible by 400, then it is a leap year
    3. else it is not a leap year
*/
//Todo:------leap year full-truth------


//Esay Way:
function isLeapYear2(year) {
    if (year % 400 === 0) {
        return true; // 400 দ্বারা বিভাজ্য হলে সবসময় লিপ ইয়ার
    } 
    else if (year % 100 === 0) {
        return false; // 100 দ্বারা বিভাজ্য হলে লিপ ইয়ার নয়
    } 
    else if (year % 4 === 0) {
        return true; // 4 দ্বারা বিভাজ্য হলে লিপ ইয়ার
    } 
    else {
        return false;
    }
}

console.log(isLeapYear2(2000));     // true
console.log(isLeapYear2(1900));    // false
console.log(isLeapYear2(2024));   // true
console.log(isLeapYear2(2052));  // true




// Another Way:
function isLeapYear(year) {
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}


const isResult2 = isLeapYear(2000);
console.log(isResult2);  //true