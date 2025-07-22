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
    }
];

let bankBalance = 10;

// Promise version of buyProduct
function buyProduct(product_name,cb) {
    return new Promise((resolve, reject) => {
        let found = false;
        for (let i = 0; i < products.length; i++) {
            if (products[i].name == product_name) {
               
                resolve(products[i].price);
                return;
            }
        else {
            reject("no product found");
        }
    }
    });
}

function pay(amount, cb) {
    // Implementation for payment logic
    if (bankBalance >= amount) {
        bankBalance -= amount;
        cb(null, `Payment successful. Remaining balance: ${bankBalance}`);
    } else {
        cb("Insufficient balance", null);
    }
}

// Using the Promise version
buyProduct("Iphone 16")
    .then(price => {
        console.log("Product price:", price);
        return price;
    })
    .catch(err => {
        console.log("Error:", err);
    });

// Using async/await (alternative way to use promises)
async function purchaseProduct(productName) {
    try {
        const price = await buyProduct(productName);
        console.log(`Found product with price: ${price}`);
        
        if (bankBalance >= price) {
            console.log("Purchase successful!");
            bankBalance -= price;
            console.log(`Remaining balance: ${bankBalance}`);
        } else {
            console.log("Insufficient funds!");
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

// Test the function
purchaseProduct("samsung");