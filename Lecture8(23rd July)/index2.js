let products = [
    {
        id: 1,
        name: "Iphone 16",
        price: 100000
    },
    {
        id: 2,
        name: "samsung",
        price: 50000
    },
];

let bankBalance = 100000;

// Convert buyProduct to return a Promise
function buyProduct(product_name) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].name === product_name) {
                return resolve(products[i].price);
                
            }
        }
        reject("No product found");
    });
}

// Define pay as a Promise function
function pay(amount) {
    return new Promise((resolve, reject) => {
        if (bankBalance >= amount) {
            bankBalance -= amount;
            resolve(`Payment of ${amount} successful. Remaining balance: ${bankBalance}`);
        } else {
            reject("Insufficient balance.");
        }
    });
}
async function purchase()
{
let amount =await buyProduct("samsung");
let message =await pay(amount)
console.log(message);
return message;
}
let re=purchase()
console.log(re);


//ye dependent nahi hai tab bhi wait kr rha hai uppar vale ka complete hone ka, because uppar vala block kr rha hai,
//async word ko use krna hai await ke sath in js
// hor mjs me jarurat nahi hoti aynch likhne ki 
//agar likh bhi de to mjs mei chale ga
//asyn await - blocking ko remove krta hai 
let result=add(2,3)
console.log(result);
console.log("hello world")