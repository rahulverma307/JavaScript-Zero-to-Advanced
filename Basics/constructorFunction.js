// console.log("jai Shree Ram");

function Person(name,age){
   this.name=name,
   this.age=age
}
function Car(make,model){
    this.make=make;
    this.model=model; 
}
let myCar=new Car("toyota","b6e")
// console.log(myCar);//Car { make: 'toyota', model: 'b6e' }
let myNewCar=new Car("tata","punch")
// console.log(myNewCar);//Car { make: 'tata', model: 'punch' }

function Tea(type){
    this.type=type
    this.describe=function(){
        return`this is cup of ${this.type}`
    }
}
let lemonTea=new Tea("lemon tea")
// console.log(lemonTea.describe("chai"));//this is cup of lemon tea

function animal(species){
    this.species=species
}
animal.prototype.sound=function(){
    return `${this.species} makes a sound`
}

let dog= new animal("dog")
// console.log(dog.sound());//dog makes sound

let cat= new animal("cat")
// console.log(cat.sound());//cat makes sound

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keywords");
    }

    this.name=name
}
let tea=new Drink("tea")//Drink { name: 'tea' }
let coffe=  Drink("coffe")//show error Drink must be called with new keywords
console.log(tea);
console.log(coffe);







