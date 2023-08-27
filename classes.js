// class Animal{
//     let name;
    
//         Animal(name, species){

//         }
// }

class Person{
        constructor (name,yearOfBirth){
            this.name = name;
            this.yearOfBirth = yearOfBirth;
        }
    getDetails=()=>{
        return `Name: ${this.name} and Age: ${2019-this.yearOfBirth}`
    }
}


class Pilot extends Person{
    
    constructor(exp, type,license){
        super('John wick',1980)
        this.experience=exp;
        this.type=type;
        this.license=license;
    }
    getData=()=>{
        console.log(`   Experience: ${this.experience} and Type: ${this.type}`);
    }
}
const john=new Pilot(28,'Private','tc2343')
console.log(john)
john.getData();