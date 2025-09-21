// console.log("jai shree ram");
//prototype
//ans= protype is special object that is used for inheritance and property sharing between objects
//1st method
// this method is older way 
let computer={cpu:12}
let lenovo={
    screen:"HD",
    __proto__:computer,
}
let tomHardwaee={}
console.log(`lenovo`,lenovo.__proto__);//lenovo { cpu: 12 }

//2method

let genericcar={tyre:4}
let tesla={
    drivier:"AI",
}
Object.setPrototypeOf(tesla,genericcar)
console.log(`tesla`,tesla.tyre);
console.log(`we acces genericCar prperty using  tessla and vice verse:`,tesla.tyre);// 4 acces tyre using tesla boject

//another example

let marvelHeros={
    level1:"thor god of thunder",
    level2:"Hulk the power of gamaradiation",
    level3:"doctor strange power of magic"
}
let dcHero={
    levelA:"superman power crypto",
    levelB:"wonder woman ancient warrior",
    levelC:"batman rich"

}
Object.setPrototypeOf(marvelHeros,dcHero)
console.log(marvelHeros.levelA);//superman power crypto

/*note=
1. marvelHeros.level1 → found directly in marvelHeros
2. marvelHeros.levelA → not found in marvelHeros, so it looks into its prototype (dcHero) → found.
==>Prototype works one way only.
1.marvelHeros can access dcHero’s properties.
2.But dcHero cannot access marvelHeros’s properties*/

// Another Property
console.log(`dcheros`,Object.getPrototypeOf(dcHero.levelB));







