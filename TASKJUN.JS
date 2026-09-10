let products = [
    { name: "Egg", qty: 5, reorderLevel: 10 },
    { name: "Milk", qty: 15, reorderLevel: 10 },
    { name: "Bread", qty: 3, reorderLevel: 5 },
    { name: "Rice", qty: 20, reorderLevel: 15 }
];

let restock = products => {
    let result = [];

    for (let i = 0; i < products.length; i++) {

        if (products[i].qty < products[i].reorderLevel) {
            result.push(products[i]);
        }

    }

    return result;
};

console.log(restock(products));