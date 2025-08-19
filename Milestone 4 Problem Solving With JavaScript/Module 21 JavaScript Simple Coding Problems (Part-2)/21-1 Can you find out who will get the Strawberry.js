//NOTE: Can you find out who will get the Strawberry? //

//Todo: Max
//Todo:------Using if else------
const Disa = 56;
const Salman = 95;

if(Disa > Salman) {
    console.log("Disha will be get the Strawberyy");
}
else {
    console.log("Salman will be get the Strawberyy");  //? 'Salman will be get the Strawberyy'
}




//Todo:------Using a funcation------
function getMax(num1, num2) {
    if (num1 > num2){
        return num1;
    }
    else {
        return num2;
    }
}

const max1 = getMax(96, 79);
const max2 = getMax(100, 59);
const ultimateMax = getMax(max1, max2);

console.log("max of two is: ", ultimateMax);  //? [ 'max of two is: ', 100 ]




//Todo:-------Three team-------
const jim = 56;
const tim = 89;
const kim = 168;

if (jim > tim && jim > kim) {
    console.log("jim is the ultimate boss");
}
else if ( tim > jim & tim > kim ) {
    console.log("tim is the ultimate boss");
}
else {
    console.log("kim is the ultimate boss");  //? 'kim is the ultimate boss'
}


//Todo:-------Using funcation -------
function maxOfThree (num1, num2, num3) {
    if (num1 > num2 && num1 > num3){
        console.log("jim is the ultimate boss: ");
        return num1;
    }
    else if( num2 > num1 && num2 > num3) {
        console.log("tim is the ultimate boss: ");
        return num2;
    }
    else {
        console.log("kim is the ultimate boss: ");  //? 'kim is the ultimate boss: '
        return num3;
    }
}

const finalResult = maxOfThree(56, 89, 168);
console.log(finalResult);  //? 168




//Todo:------Simple Method------
const max = Math.max(12, 100, 52, 65, 55);
console.log("max using Math.max : ", max)  //? [ 'max using Math.max : ', 100 ]