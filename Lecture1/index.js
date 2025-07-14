console.log("hello world")
function dealy(){
    let currenttime = new Date().getTime()
    while(new Date().getTime() - currenttime<4000){

    }
    console.log("delay done") // hence it run in the last
    

}
//delay();
setTimeout(dealy,0) // here we make it async, so that it execute when rest of the code runs, 
console.log("bye")
function sum(a,b){
    console.log(a+b)
   
}
sum(2,3);
sum(4,5);
console.log("hnji");


//create a function which return a prominse to multiply two number
// a and b if a is greater than 10; 
 
function mul(a,b){
    return new Promise ((resolve,reject)=>{
    if (a>10)
    {
        return resolve(a*b);
    }
     // resolve se promise fullfil hota hai
    else{
        reject ("a<10");
    }
    })
}

//promise pe dot catch 
mul(5,6).then((data)=>
{console.log(data);

})
.catch((err)=>
{
    console.log(err)
})

//hello world
//bye
//5
//9
//hnji
//a<10
//delay done
// from above output it is clear that promise micro task queues has priority over task queue, as a<10 run first then set timeout function
//promise run before setTimeout 