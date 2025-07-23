const fs = require("fs");
fs.writeFile("./data.txt", "hello sanjana!!", function(err)
{
    if(err)
    {
        return console.log(err)
        console.log("data written")
    }
})
fs.appendFile("./data.txt", "hiii sanjana!!", function(err)
{
     if(err)
    {
        return console.log(err)
        console.log("update file")
    }

})