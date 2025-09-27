// console.log("Jai shree Ram");


let computer={
    cpu:12,
    mic:5.0
}
let lenovo={
    screen:"Hd",
    __proto__:computer
};
let mac={

}
// console.log(`computer:`,lenovo.__proto__);

let genericCars={tyres:4,}
let tesla={
    driver:"AI"
}
Object.setPrototypeOf(tesla,genericCars)
console.log(`tesla`,Object.getPrototypeOf(tesla));



//Prototype Methods in javascript
//1.Object.create()
let person={
     name:"rahul",
     rollno:4545,
    greet: function(){
       return ()=>{
        return `hello ${this.name} that is your roll no:${this.rollno}`
       };
    }
};
let student=Object.create(person)
let tea=student.greet()
console.log(tea()); 










