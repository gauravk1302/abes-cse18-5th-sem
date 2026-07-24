function greet(){
    let section = "CSE18";
    var subject = "FSD"
    console.log(`${section} & ${subject}`)
}
greet();
console.log(greet);
// console.log(subject);

// Here whether we use globalScope var and blockScope let if they are assigned inside the function they cannot be acessed outside the function only available for 
