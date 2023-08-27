const name ="John Manuel Lark"

const nameArr =name.split(" ");
console.log(nameArr);

// let firstName = nameArr[0];
// let middleName = nameArr[1];

// console.log(firstName)
//USING DESTRUCTIONING ?
let [firstName, lastName
]= nameArr;
console.log(firstName)

//USING for object

const car={
    product:'Mercedes Benz',
    yearOfManufacture:2023,
    price:10
}

let {product,price}=car;
console.log(product);

//Crreating new object
