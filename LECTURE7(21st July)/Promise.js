let users = [
    {
        id:1, 
        name:"Nistish",
        age:24
    },
    {
        id:2,
        name:"amit",
        age:21
    }
]
function isAllowed(id){
 return new Promise((resolve, reject)=>
{
    let user=null;
   for (let i = 0; i<users.length; i++){
    console.log(users[i]);
    if(users[i].id==id){
        user=users[i];
    }
   }
   if(!user)return reject("no user found")
    if(user.age<18) return  reject ("age is less than 18")

    resolve("allowed")
})
}
isAllowed(1).then((data)=>
{
    console.log(data)
})
.catch((err)=>
{
    console.log(err)
});