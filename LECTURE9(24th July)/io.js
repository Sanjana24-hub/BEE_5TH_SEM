const fs=require("fs");
function myread(filepath){
    return new Promise((resolve, reject)=>{
        fs.readFile(filepath,"utf-8",function(err,data){
            if(err) return reject(err);
            let output=JSON.parse(data);
            resolve(output);
        })
    })
}

function mywrite(filepath, data) {
    return new Promise((resolve, reject) => {
        let res = JSON.stringify(data);
        fs.writeFile(filepath, res, "utf-8", function (err) {
            if (err) return reject(err);
            resolve("File written successfully");
        });
    });
}