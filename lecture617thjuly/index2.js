let products=[
    {
        id:1,
        name:"Iphone 16",
        price:100000

    },
    {
        id:2,
        name:"samsung",
        price:50000
    },
]
let bankBalance =10;

function buyProduct(product_name,cb){
//search is product_name available in product array
//if yes return price, if not then return product is not avaiable
for(let i =0; i<products.length; i++)
{
    if(products[i].name==product_name)
    {
    cb(null,products[i].price)
    }
    else{
        cb("no product founds", null)
    }

}
}
function pay(amount,cb){

}
buyProduct("Iphone 16", function(err,data){

    if(err) return console.log(err);
    console.log(data);
})
// FileSystem.readFile(filepath,encoding,function(err,data){

// })
