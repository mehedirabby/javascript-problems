const names =['abul','babul','cabul','dabul','ebul',
'babul','abul','kabul','gabul','cabul','babul','abul','abul']

function remoteDuplicate(names){
    const unique = [];
    for (let i = 0; i < names.length-1;i++){
        const name = names[i];
        if (unique.includes(name) === false){
            unique.push(name);
        } 
    }
    return unique;
}
const uniqueNames = remoteDuplicate(names);
console.log(uniqueNames);