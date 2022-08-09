const friends = [12,45,32,22,44,62,29,69,87];
//remove elements from an array
//and,if necessery,inserts new element in their place
//returning the delete element 
//will change the original array

const partial = friends.splice(2,5,99,555,777,778,852,74,48,54)
console.log(partial);
console.log(friends);