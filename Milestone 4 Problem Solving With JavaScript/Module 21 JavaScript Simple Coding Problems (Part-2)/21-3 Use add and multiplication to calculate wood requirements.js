//NOTE: * add and multiplication to calculate wood requirements *

//* ---Function interesting example---

/*
*    Chair --> 3 cht
*    Table --> 10 cht
*    Bed --> 50 cht
*/

//Todo:------Calculate Total wood------
function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;


    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}


const wood = woodQuantity(6, 2 , 1)

console.log('Wood needed:', wood);   //? [ 'Wood needed:', 88 ]