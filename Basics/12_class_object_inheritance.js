// console.log("jai shree ram");
//object is instance of class

let car={
    make:"toyota",
    model:"camry",
    year:2020,
    start:function(){
        return `${this.make} car got strated in ${this.year}`
    }
}
console.log(car.start());

//function constructor

function colloge(name,Fyear){
    this.name=name;
    this.Fyear=Fyear;
}
let GCET=new colloge("GCET",2003)
console.log(GCET);  // we create a   object code

/// class

class Vehicle{
    constructor(make,model) {
        this.make=make;
        this.model=model
    }
    start(){
        return`${this.make} and ${this.model}`
    }
}
let cars=new Vehicle("tata","punch")
console.log(cars.start());//tata and punch

//inheritance
class Bike extends Vehicle{
     drive(){
        return`bike manufacture by ${this.make} and model is ${this.model} and owner name is  ${this.name} and year of purchase ${this.Fyear}`
     }
}
let bike = new Bike("royal Enfeild","Bullet")
console.log(bike.drive());//bike manufacture by royal Enfeild and model is Bullet

