// let user ={
//     name:"Nitesh",
//     email:"Nitesh1234@gmail.com",
//     address:"haryana",
//     password:"12345"
// }
// ek user ki information store hai
// but in order to store the multiple user information, so we do it using array
const fs = require("fs");

let users = [
  {
    name: "Nitesh",
    email: "Nitesh1234@gmail.com",
    address: "haryana",
    password: "12345"
  },
  {
    name: "Ritik",
    email: "Ritik1234@gmail.com",
    address: "delhi",
    password: "1234567"
  }
];

fs.writeFile("./userdata.json", JSON.stringify(users, null, 2), function(err) {
  if (err) return console.log(err);
  console.log("User data written successfully!");
});
