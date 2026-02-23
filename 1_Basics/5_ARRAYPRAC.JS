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



 // Array is mutable mean original array me chnage ho sakta hi
// Array Practice 22-02-2026

let array=[78,54,true,"name","rahul","null","undefined"]
console.log(array);// in this we stored value directly

// let array1=[]
// console.log(array1);// Return [] array

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

// Array Methods --> MUtating methos(Original array change karte hain)

let array1=[]
array1.push(45,87,98,45,"true","false","null");
console.log(array1);//[ 45, 87, 98, 45, 'true', 'false', 'null' ]
array1.pop()// remove element from last // null
array1.pop()// remove element from last//false
console.log(array1);//null remove

// unshitft->starting me add karta hia
// shift-> starting se remove karta hia


// splice->add/remove anywhere

const edit=["R","A","M","J","I"]
edit.splice(1,4)//"R" remove chnage in orignal Array
console.log(edit);//[ 'R' ]

let num=[4,8,9,7,1,2,12,4]
num.sort()
console.log(num);//[ 1, 12, 2, 4, 4,  7, 8, 9]
let num1=[1,2,3,4,5,6,7,8,9]
num1.reverse()
console.log(num1);//[ 9, 8, 7, 6, 5, 4, 3, 2, 1];

//2. None Mutating methods (New Array banate hia)

//1.Slice

let AgeFolder=[10,12,1,5,9,7]
let UpdatedFolder=AgeFolder.slice(0,4)
console.log(UpdatedFolder);//[ 10, 12, 1, 5 ] Exract part from array create an new array copy
//2. concat Array
let Naam="rahul"
let nameUpdated=UpdatedFolder.concat(Naam)
console.log(nameUpdated);//[ 10, 12, 1, 5, 'rahul' ]

//3. Flat 

let flats=[[454],[4454,454],[7,98,4,5]]
let updatedFlat=flats.flat()
console.log(updatedFlat);//[ 454,4454,454,7,98,4,5]
//flat(infinity)-> for full flaten array



// Searchin Method
//1.Include()

let MarvelHero=["ironMan","Hulk","Groot","Thor","Loki"]
console.log(MarvelHero.includes("Hulk"));// true->check element present in array or not

//2.indexOf()-- return a index number

console.log(MarvelHero.indexOf("Hulk"));//1

//3.find()-> Return First condition Matching value.
let userss=[89,65,10,20,30]
let upadtedUsers=userss.find((match)=>(match<20))
console.log(upadtedUsers);//10*/

//Looping Methods(Most asked in Interview)

//1..ForEach()->just loop no retrun
//Q1.Print all numbers from array:
let EachNum=[10,20,30,40]
EachNum.forEach(num=>console.log(num))
//Q2Print only index of each element.
EachNum.forEach((num)=>console.log(num*num))// return square

//Q3
let arr3=["Rahul", "Amit", "Neha"];
arr3.forEach((name)=>console.log("Hello",name));


//Q4 increase price by 10%
let prices = [100, 200, 300];
prices.forEach(increase=>console.log(increase+(increase*10/100)));

//Q5:Add property isActive: true to every user object
let users = [
  {name: "Rahul"},
  {name: "Amit"}
];
users.forEach((add)=>add.isActive=true)
console.log(users);

//Q6 Count how many numbers are greater than 50
let number1=[45,98,78,45,12,5,8,65,7,62,89,62]
number1.forEach(num=>console.log(num>50))


























