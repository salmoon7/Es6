// let greetings=(name)=>{
//     return `Welcome ${name}`
// }

// console.log(greetings('Tayo'));
//Rest and spread  operator

// let mArr=(...args)=>{
// let sum=0;
// for(let i=0; i<args.length; i++){
//     sum+=args[i];
    
// }
// console.log(sum);
// }
// mArr(1,2,3,4,5)

//spread operator it allows arrays and object to be expanded 
// let mArr1=[1,2,3,4,5];

// let mArr2=[...mArr1];
// console.log(mArr2);


//spread operator gives the copy of an array but does not givr the refrence e.g

let mArr1=['Tayo','Olu','Bolu','Tito']
let mArr2=[...mArr1];
mArr1.push('Ajoke')
console.log(mArr1)

console.log(mArr2)

//it can also be used to concatenate
let mArr3 =mArr1.concat(mArr2)
console.log(mArr3)  //using spread opertor
let mArr4 =[...mArr1,...mArr2] //sequence 
console.log(mArr4) 

let mObj1={
    name:'John'
}
let mObj2={
    age:20
}

let mObj3={...mObj1, ...mObj2}
console.log(mObj3)