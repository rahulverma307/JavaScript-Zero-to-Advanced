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
    constructor(make,model ,name,year) {
        this.make=make;
        this.model=model
        this.name=name
        this.year=year
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
        return`bike manufacture by ${this.make} and model is ${this.model} and owner name is  ${this.name} and year of purchase ${this.year}`
     }
}
let bike = new Bike("royal Enfeild","Bullet","rahul",2025)
console.log(bike.drive());//bike manufacture by royal Enfeild and model is Bullet

