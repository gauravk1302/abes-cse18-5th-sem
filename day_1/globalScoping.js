var a=34;
console.log(a);
{
    console.log(a);
    var a = 45;
    console.log(a);
    var b = 56;
    console.log(b);
    a = 78;
    console.log(a);
}
console.log(a);
console.log(b);

// Var used here has global variable scope 
// Here we have assigned the value of a as 78 and then when we try to access it then due use of var scope we see that value will be assigned that is assigned at the last because of var global scope 