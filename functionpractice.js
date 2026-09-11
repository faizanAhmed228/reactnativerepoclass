// let product_avablity = prod => prod.qty > 0 ? 'avalibile' : 'outofstock';

// let product1 = { name: 'egg', qty: 12 };

// console.log(product_avablity(product1));


// let marks = [20, 40, 50, 90, 98, 70, 100];

// let shot = marks => marks > 50 ? 'pass' : 'fail';

// let pass = 0;
// let fail = 0;

// for (let st of marks) {
//     if (shot(st) == 'pass') {
//         pass++;
//     } else {
//         fail++;
//     }
// }

// console.log(`Number of students who passed: ${pass}`);
// console.log(`Number of students who failed: ${fail}`);

// let person = [{name:"Ali", age: 20},
//               {name:"Ahmed", age: 30},
//               {name:"Zeeshan", age: 25}];
//   let member = person => {
//     const arr = [];
//     for (const p of person) {
//         if(p.age > 25) {
//             arr.push(p.age);
//         }
//     }
//     return arr; 
//   }

//   console.log(member(person));g

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

//task 2

let employees = [
    { name: "Ali", years: 6, rating: 5 },
    { name: "Ahmed", years: 3, rating: 5 },
    { name: "Usman", years: 7, rating: 3 },
    { name: "Hamza", years: 2, rating: 3 }
];

let calculateBonus = employees => {

    let result = [];

    for (let i = 0; i < employees.length; i++) {

        let bonus = 0;

        // Both conditions
        if (employees[gi].years >= 5 && employees[i].rating >= 4) {
            bonus = 10000;
        }

        // Only one condition
        else if (employees[i].years >= 5 || employees[i].rating >= 4) {
            bonus = 5000;
        }

        // No condition
        else {
            bonus = 0;
        }

        result.push({
            name: employees[i].name,
            bonus: bonus
        });
    }

    return result;
};

console.log(calculateBonus(employees));