const express = require('express');
const app = express();
const fs = require("fs");
// app.use(express.static(__dirname+"/public"))
app.get("/todos",(req,res)=>
{
    s.readFile("./todos.json","utf-8",function(err,data)
{
    if(err)
    return res.json({
    success:false,
    message:err.message})
})
let todos = JSON.parse(data);
res.josn({
    success:true,
    data:todos
})
})

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});