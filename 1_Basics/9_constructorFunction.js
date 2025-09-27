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
let newAdm=new Person("rahul",12)
let detail=[]
// detail.push(newAdm)
// console.log(detail);




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





// constructor funciton

function Dinosaurs(type){
    this.type=type
}
Dinosaurs.prototype.danger=function (){
    return`${this.type} makes loud  sound`
}
let trex=new Dinosaurs("reptosauras")
console.log(trex.danger());




