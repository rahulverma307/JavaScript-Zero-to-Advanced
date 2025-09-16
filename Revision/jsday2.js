console.log("Jai Shree Ram")//Jai Shree Ram

//object

let student={
    name:"rahul",
    class:"12th",
    rollnno:"85",
    branch:"cse",
    "Lname":"verma"
}

student.name="vivek"//update rahul to vivek
student.earn=85 // add in object
delete student.class  // use for delete key and value
console.log(student);
console.log(student.name);// use for acces a particuler key
console.log(student["Lname"]);
console.log(student.class);// give undefined because class is delete
console.log(Object.keys(student));// use for print only keys
console.log(Object.values(student));//print only all values
console.log(Object.entries(student));// print full

//combine to object
let Obj={
    name1:"sakshi",
    age1:23,
    sex1:"female"

}
let Obj1={
    name3:"pankaj",
    age:22,
    sex:"male"
}

let merged={...Obj,...Obj1}
console.log(merged);


//checked property exits or not

console.log("name1" in Obj);// true
console.log("Lname" in student );//true

// Object are refrence type does not create new memory ,it point same location


// top interview question

//1. How do you create an object in JavaScript?
//answe=> theres are mainly three way of creating array.
//1.Object iteral
let a={
    naam:"hulk"
}
//2.usinf new Object

let naam1=new Object();
naam1.roll=25
console.log(naam1);

//3.using constructor function/class

class person{
    constructor(name,age){
       this.name=name;
        this.age=age;
    }
        
}
let obj4=new person("rahul",45)
console.log(obj4);


// shallow copy and deep copy

let obj = { name: "Rahul", details: { city: "Delhi" } };

// Shallow copy
let shallow = { ...obj };
shallow.details.city = "Mumbai"; 
console.log(obj.details.city); // "Mumbai" (changed)

// Deep copy
let deep = JSON.parse(JSON.stringify(obj));
deep.details.city = "Lucknow";
console.log(obj.details.city); // "Mumbai" (not affected)


//Difference between == and === for objects

let a = { name: "Rahul" };
let b = { name: "Rahul" };
console.log(a == b);  // false
console.log(a === b); // false (different references)

let c = a;
console.log(a === c); // true (same reference)


















