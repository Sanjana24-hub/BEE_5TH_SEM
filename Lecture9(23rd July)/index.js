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

// Using buyProduct with .then() and .catch()
buyProduct("samsung")
    .then((data) => {
        console.log("Product price:", data);
        return pay(data);
    })
    .then((message) => {
        console.log("Payment status:", message);
    })
    .catch((err) => {
        console.log("Error:", err);
    });
console.log("wassup");
let amount=buyProduct("Iphone")
let mes=pay(amount)
console.log(mes)