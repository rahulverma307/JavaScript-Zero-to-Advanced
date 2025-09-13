// console.log("Jai Shree Ram");

let student={
    name:"rahul",
    rollno:4545,
    branch:"cse",
    department:"B.tech"
}


// console.table(student)
/*
┌────────────┬──────────┐
│ (index)    │ Values   │
├────────────┼──────────┤
│ name       │ 'rahul'  │
│ rollno     │ 4545     │
│ branch     │ 'cse'    │
│ department │ 'B.tech' │
└────────────┴──────────┘ */

//Data types
//1.string

let name1="hitesh45"
let name2=new String("hitesh") // these are two creating string in js
// console.log(name,name1);
// console.log(name2.length);//5
console.table(name1.slice(0,4));//hite

let number="one,two,three"
console.log(number.split(","));//convert into array [ 'one', 'two', 'three' ]

let number1="     helooo   "
console.log(number1.trim());//helooo remove extra space both side
console.log(number1.trimStart());// remove space formthe start
console.log(number1.trimEnd());// remove space from the end


let sum =2+"22"-"2"//in that after minus string converted number but plus not
// console.log(sum);


//reverse string

function reverse(str){
    return str.split("").reverse().join("")
}
console.log(reverse("rahul"));//luhar

//check palindrome

function isPalindrome(str){
    return str===str.split("").reverse().join("")
}
console.log(isPalindrome("rahul"));

//count occureance

function count(str,char){
    return str.split(char).length-1
}
console.log(count("apple","p"));

//object

let student1={
    name:"rahul",
    rollno:4545,
    branch:"cse",
    department:"B.tech"
}

console.log(Object.keys(student1));//[ 'name', 'rollno', 'branch', 'department' ]
console.log(Object.values(student1));//[ 'rahul', 4545, 'cse', 'B.tech' ]
console.log(Object.entries(student1));

//object related q
//1.What is an object in JavaScript?
// ans= object is collection of key value pair

//2.How do you create an object? (literal vs constructor)?
let a={
    chai:"green tea",
    juice:"orange"
}//literals
 
let b=new Object({chai:"red tea"})

//3.How do you access object properties? (dot notation vs bracket notation)
// use dot method
console.log(a.chai);//green tea
//use bracket method
console.log(b["chia"]);
//4.How do you add or delete a property from an object?
delete a.chai//
console.log(a);//delete green tea


const add=(a,b)=>a+b;
console.log(add(4,5));













