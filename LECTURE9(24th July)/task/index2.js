const fs=require("fs")


let  users=[
{
    id:1,
    name:"sanjana",
    email:"abcd@gmail.com",
    address:"Patiala",
    password:"2345"
},
{
    id:1,
    name:"sagwal",
    email:"edf@gmail.com",
    address:"Patiala",
    password:"2345"
},
{
    id:1,
    name:"sagwal1",
    email:"idf@gmail.com",
    address:"Patiala",
    password:"2345"
}

]


// fs.writeFile("./data.json",JSON.stringify(users),function(err)
// {
//     if(err) return err;
//       console.log("completed");


// })

fs.readFile("write/data.json","utf-8",function(err,data){
    if(err) return err;
    // console.log(users);

    let users=JSON.parse(data);
    console.log(users[1]);
})