// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((res)=>{
//     // console.log(res);
//     // console.log(res.ok);
//     return res.json()
// })
// .then(()=>
// {
//     console.log(data)
// })
// .catch((err)=>
// {
//     console.log(err);
// })




//******************************************/

async function getTodos() 
{
   
        let response = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data = await response.json()
        console.log(data)
}

getTodos();
