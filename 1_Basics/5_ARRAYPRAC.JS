// console.log("Jai Shree Ram");
/*
//Important Array Methods

let arr2 = [10, 20, 30];
arr.push(40);   // [10,20,30,40]
arr.pop();      // [10,20,30]
arr.unshift(5); // [5,10,20,30]
arr.shift();    // [10,20,30]
console.log(arr2);


//Searching

let score=[45,78,98,65,85]
console.log(score.indexOf(85));
console.log(score.lastIndexOf(85));
console.log(score.includes(45));

let num=[4,8,16,32,64,128,256]
num.reverse()
console.log(num);


// iteration method
// 1.Executes a function for each element in the array.
// It does not return anything
let arr1=[5]
arr.forEach((num)=>console.log(num*num)) 
console.log(arr1);

// 2.👉 Creates a new array by applying a function to each element.


let student=["anjali","sakshi","prashant","pratibha"]
let newstudent=student.map(val=>val+" "+"verma")
console.log(newstudent);

// 3.Creates a new array with elements that pass a condition.

let number=[10,15,20,25,30]
let evens=number.filter(n=>n%2==0)
console.log(evens);

// 4.Reduces array to a single value (sum, product, max, object, etc.).
let nums=[1,2,3,4,5];
let sum=nums.reduce((acc,curr)=>acc+curr,)
let prod=nums.reduce((acc,curr)=>acc*curr,1)// 1 only one time repeat
console.log(sum);//15 TO number
console.log(prod);//120


let arr = [1,2,3,4];

// slice
console.log(arr.slice(1,3)); // [2,3]

// splice
arr.splice(2,1,99); // [1,2,99,4]

// concat
console.log(arr.concat([5,6])); // [1,2,99,4,5,6]

// join
console.log(arr.join('-')); // "1-2-99-4"

// flat
let nested = [1,[2,[3,4]]];
console.log(nested.flat(2)); // [1,2,3,4]


*/

// Array Practice 22-02-2026

let array=[78,54,true,"name","rahul","null","undefined"]
console.log(array);// in this we stored value directly

let array1=[]
console.log(array1);// Return [] array

let array2=Array(3)
console.log(array2);//[ <3 empty items> ]this create 3 empty slote in array
array2.push(2)
console.log(array2);// [ <3 empty items>, 2 ]

//length

console.log(array2.length);// 4

//
let passengerName=Array("Vivek","piyush","manoj")
console.log(passengerName);// [ 'Vivek', 'piyush', 'manoj' ] create a normal array

// Array.of()
let passenger=Array.of(3)
console.log(passenger);//[3]create array of value 3 and anything

//Array.form()
let employe=Array.from("NASA");
console.log(employe);//[ 'N', 'A', 'S', 'A' ]  this break string in character and make array.






















