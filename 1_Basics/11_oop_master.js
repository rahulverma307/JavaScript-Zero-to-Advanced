// console.log("Jia Shree Ram");

//1. Object Literal
let car = {
    make: "toyota",
    model: "camry",
    year: "2020",
    start: function() {
        return `${this.make} car got started in ${this.year}`;
    }
};

//example=2
//  let car1={
//     name:"thar",
//     model:"roxx",
//     year:2025,
//     features:function(){
//         return`car name is:${this.name} and model is ${this.model} and launch year ${this.year}`
//     }

//  }
//  console.log(car1.features());

// console.log(car.start()); 
// // "toyota car got started in 2020"

// //2. Function Constructor
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let p1 = new Person("Rahul", 25);
// console.log(p1.name); // ✅ "Rahul"

 
// //3. Prototype & Prototypal Chain

// function Animal(type) {
//    this.type = type;
// }

// Animal.prototype.speak = function() {
//     return `${this.type} makes a sound`;
// };

// let dog = new Animal("Dog");
// console.log(dog.speak()); 
// // ✅ "Dog makes a sound"

// //4.Extending Built-in Prototypes
// Array.prototype.hitesh = function() {
//     return `custom method ${this}`;
// };

// let myArray = [1,2,3];
// console.log(myArray.hitesh()); 
// // ✅ "custom method 1,2,3"

// let myNewArray = [1,2,3,4,5,6,7];
// console.log(myNewArray.hitesh()); 
// // ✅ "custom method 1,2,3,4,5,6,7"


// //5. ES6 Classes
// class Vehicle {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     start() {
//         return `${this.make} is a car from ${this.model}`;
//     }
// }

// let b = new Vehicle("Honda", "City");
// console.log(b.start());
// // ✅ "Honda is a car from City"


// //6. Inheritance (Using extends)

// class Car extends Vehicle {
//    drive() {
//       return `${this.make}: this is an inheritance example`;
//    }
// }

// let mycar = new Car("Tata", "India");
// console.log(mycar.start()); // ✅ "Tata is a car from India"
// console.log(mycar.drive()); // ✅ "Tata: this is an inheritance example"

//7.Encapsulation->restrict direct access of object data

class BankAccount{
    #balance=0;//# means anyone can't acces
    deposit(amount){
        this.#balance+=amount
        return this.#balance
    }
     getBalance(){
        return `$ ${this.#balance}`
     }
}
let rahul=new BankAccount()
console.log(rahul.getBalance());





