const fs = require("fs");

// Step 1: Create demo.txt
fs.writeFile("./file1.txt", "Hello demo 1", function(err) {
    if (err) return console.log(err);
    console.log("file1.txt created");



    
    // Step 2: Create demo2.txt
    fs.writeFile("./file2.txt", "Hello demo2", function(err) {
        if (err) return console.log(err);
        console.log("file2.txt created");




        // Step 3: Read demo.txt
        fs.readFile("file1.txt", "utf8", function(err, data1) {
            if (err) return console.log(err);



            // Step 4: Read demo2.txt
            fs.readFile("file2.txt", "utf8", function(err, data2) {
                if (err) return console.log(err);



                

                // Step 5: Combine data and write to demo3.txt
                const combinedData = data1 + data2;
                fs.writeFile("./file3.txt", combinedData, function(err) {
                    if (err) return console.log(err);
                    console.log("demo3.txt created with combined content");
                });
            });
        });
    });
});
