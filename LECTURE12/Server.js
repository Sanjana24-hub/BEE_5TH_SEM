// // // server.js
// // const express = require('express');
// // const app = express();
// // app.get("/", req, res) => {
// // res.sendFile(__dirname+"/index.html")
// // } 
// // aap.post("/users",(req,res))
// // const PORT = 3000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // });

// // //post req: data hide ho kr jata hai
// // // get req: data visible hota hai 
// // //get request hum tab use krte hai jab hume server ka state nahi changee krte hai , it means we are not changing anything in the database of server 
// // // put/post/delete-- in sbmei server ka state change hota hai because either we are putting or posting some values in data of server or delete anything from it . 


// // // server.js
// // const express = require('express');
// // const app = express();
// // app.use(express.urlencoded({ extended: true })); //it parse form urlencoded data into object
// // app.get("/", (req, res) => {
// //   res.sendFile(__dirname + "/index.html");
// // });

// // app.post("/users", (req, res) => {
// // //   const { username, password } = req.body;
// // //   console.log(`Username: ${username}, Password: ${password}`);
// // let username =req.body.username;
// // let password =req.body.password;
// // console.log(username, password);

// // fs.appendFile(path.join(__dirname, 'users.txt'), userData, (err) => {
// //     if (err) 
// //     {
// //       console.error("Error writing to file:", err);
// //       return res.status(500).send("Server error");
// //     }
// //     res.send("User data saved successfully!");
// // });


// // const PORT = 3000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // });


// // post --> reqbody --> form  ---> urlecoded --> parse ---> express.urlecodede


// //************************************************************************** */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});


app.post("/users", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log(username, password);

  const userData = `Username: ${username}, Password: ${password}\n`;

  fs.appendFile(('users.txt'), userData, (err) => 
    {
    if (err) 
    {
      console.error("Error", err);
    }
    res.send("User data saved successfully!");
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// //***************************************************************************************8 */
// //writefile --->overwrite
// //append--->[][] or{}{} error 
// //read -->





//homework api bnani hai################################################333
//login.html
//app.post("/login",(req,res)=>
   // res.sendfile(__dirname)+"./login.html")