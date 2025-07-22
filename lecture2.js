
const fs = require("fs");
console.log("start");
setImmediate(()=>{
    console.log("immedate1")
})
setTimeout(()=>{
    console.log("timer1")
},0)

fs.readFile("demo.txt", "utf-8",(err,data)=>{
    if(err) return console.log(err);
    console.log(data);
})
function fun(){
    console.log("fun");
}
fun();
    console.log("end")

    // set immediate- poll phase ke baad chlta hai 


console.log("start")
setTimeout(()=>{
    console.log("timer1")
},0)
setImmediate(()=>{
    console.log("immediate1")
})
process.nextTick(()=>{
    console.log("next tick 2")})
console.log("end")

