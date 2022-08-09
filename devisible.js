//devisible.js
/*
    1.show output from : 1 to 50
    2.if the number is devisible by 3 then instead of the number show "foo".
    3.if the number is devisible by 5 then instead of the number show "bar".
    4.if the number is devisible by both 3 and 5 then instead of the number show "foo-bar".

*/
for(let i = 1; i<=50;i++){
    if(i % 3 ===0 && i%5 ===0){
        console.log('foo-bar');
    }
    
    else if(i%5===0){
        console.log('bar');
    }
    else if(i%3===0){
        console.log('foo');
    }
    else{
        console.log(i)
    }
   
    //console.log(i);
}