// // let user ={
// //     name:"Nitesh",
// //     email:"Nitesh1234@gmail.com",
// //     address:"haryana",
// //     password:"12345"
// // }
// // ek user ki information store hai
// // but in order to store the multiple user information, so we do it using array
// const fs = require("fs");

// let users = [
//   {
//     name: "Nitesh",
//     email: "Nitesh1234@gmail.com",
//     address: "haryana",
//     password: "12345"
//   },
//   {
//     name: "Ritik",
//     email: "Ritik1234@gmail.com",
//     address: "delhi",
//     password: "1234567"
//   }
// ];

// fs.writeFile("./userdata.json", JSON.stringify(users, null, 2), function(err) {
//   if (err) return console.log(err);
//   console.log("User data written successfully!");
// });



// Method 1: Using fs.promises (Node.js built-in)
const fs = require('fs').promises;

// Sample user data
const users = [
  {
    id: 1,
    name: "Nitesh",
    email: "nitesh1234@gmail.com",
    address: "Haryana",
    password: "12345"
  },
  {
    id: 2,
    name: "Ritik",
    email: "ritik1234@gmail.com",
    address: "Delhi",
    password: "1234567"
  }
];

// Write file using promises
async function writeUserData() {
  try {
    await fs.writeFile('./userdata.json', JSON.stringify(users, null, 2));
    console.log('User data written successfully!');
  } catch (error) {
    console.error('Error writing file:', error);
  }
}