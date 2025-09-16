// // console.log("jai Shree Ram");//Jai Shree Ram

// //array

// let arr=["a","b",1,2,3,4,true,false]
// console.log(arr);

// console.log(arr[1]);//b
// arr.push("b")// add element in last
// console.log(arr);
// arr.pop()// remove element from the last
// console.log(arr);// remove element b
// arr.unshift("rahul")
// console.log(arr);//add element at first location
// arr.shift()
// console.log(arr);// remove element from the first positon
// arr.reverse()
// console.log(arr);// reverse array
// console.log(arr.indexOf("b"));// position of b element is 6 because array is reverse
// console.log(arr.lastIndexOf("b"));///?
// console.log(arr.includes(2));// true=>2 is present in array


//Top 10 most common JavaScript Array interview questions (with short answers & examples):
/*1. Difference between forEach(), map(), filter(), and reduce()?

forEach() → Iterates, no return.

map() → Returns new array.

filter() → Returns array of matching elements.

reduce() → Reduces to single value.*/
//Sum of all element in a array

let arr1=[10,10,20,40,20]
let sum=0
arr1.forEach((num)=>{
   sum=sum+num
});
console.log(sum)//100

//print each element if an array
let arr2=[1,2,3,4,5,6]
arr2.forEach((num)=>{
   console.log(num)
});
console.log(arr2)













