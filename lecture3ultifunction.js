function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
// console.log(add(2,3));
// console.log("utli", MediaSourceHandle.exports);
// module.exports.add=add;
// module.exports.sub=sub;
// module.exports.mul=mul;
console.log("util",module.exports)

//*************alternate way to export
module.exports={
    add,
    sub,
    mul
}