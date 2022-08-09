/* 
    fixed : per item wood requirments
    1.chair----> 3cft
    2.table ---> 10cft
    3.bed -----> 50cft


    vary : Quantity
*/
function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = perChairWood * chairQuantity;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = perBedWood * bedQuantity;

    //console.log(chairQuantity,tableQuantity,bedQuantity)
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
const totalWood = woodCalculator(1,1,1);
console.log('total wood required', totalWood);
 