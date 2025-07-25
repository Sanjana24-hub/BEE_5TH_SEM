const fs = require("fs");

fs.readFile("../userdata.json", "utf-8", function(err, data) {
    if (err) return console.log(err);
    let users1 = JSON.parse(data);

    // fs.readFile("../userdata2.json", "utf-8", function(err, data) {
    //     if (err) return console.log(err);
    //     let users2 = JSON.parse(data);
    //     let allu

        // You can now work with users1 and users2
        console.log("Users from first file:", users1);
        // console.log("Users from second file:", users2);
    });
