const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {class:9,id:121,name: 'agun'};
const firends = [13,14,11,17,21,16,15,20];
function add(num1,num2){
    return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
//CHECK ARRAY   using Array.isArray()
console.log(Array.isArray(firends));
console.log(typeof add);
//-----------------
console.log(firends.includes(19));
console.log(firends.includes(21));
if (firends.indexOf(252) !==-1){
    console.log('this is available')

}
else{
    console.log('this is not available' );
}


//concate
const newFrieandsAge = [9,8,26];
const allFriends = newFrieandsAge.concat(firends);
console.log(allFriends);
