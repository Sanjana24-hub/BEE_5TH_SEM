// const fs = require("fs");

// fs.readFile("./userdata.json", "utf-8", function(err, data) {
//   if (err) return console.log(err);
//   let users = JSON.parse(data);
//   console.log(users);
// });


const fs = require('fs').promises;

async function readUserData() {
  try {
    const data = await fs.readFile("./userdata.json", "utf-8");
    const users = JSON.parse(data);
    console.log(users);
  } catch (err) {
    console.log(err);
  }
}

readUserData();