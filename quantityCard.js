//quantityCard.js


const shoppingCard = [
    {name:'shoe', price:12000,quantity: 2},
    {name:'shirt', price:22000,quantity: 5},
    {name:'shoe', price:12000,quantity: 4},
    {name:'pant', price:37000,quantity: 3},
    {name:'belt', price:6000,quantity: 5}
]
function totalCost (products){
    let sum = 0;
    for(let i = 0; i<products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
        //console.log(product);
    }
    return sum;
}
const expense = totalCost(shoppingCard);
console.log("total cost",expense);