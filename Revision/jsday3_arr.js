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

// let arr1=[10,10,20,40,20]
// let sum=0
// arr1.forEach((num)=>{
//    sum=sum+num
// });
// console.log(sum)//100

// //print each element if an array
// let arr2=[1,2,3,4,5,6]
// arr2.forEach((num)=>{
//    console.log(num)
// });
// console.log(arr2)

///
/*
let Flower=["rose","lilly","Lotus","gulab","sunflower"]
let forces=new Array("navy","army","air Force")
for(let i=0;i<Flower.length;i++){
   console.log(`my favourite is : ${Flower[i]} `);
}

///array all methods
console.log(Flower.toString());//1. convert array to string
console.log(Flower.join("-"));//2. add item between to array element
// console.log([Flower.length]="rose");//wrong
//3.Splice
let fruits=["mango","banana","lichi","orange","apple"]
//3.1. removed example
let removed=fruits.splice(2,2)
console.log(removed);//[ 'lichi', 'orange' ]
console.log(fruits);//[ 'mango', 'banana', 'apple' ]
//3.2. adding
let adding=fruits.splice(1,0,"sugar","watermelon")
console.log(adding);
console.log(fruits);
//3.3 replacing
let replace=fruits.splice(1,2,"kiwi","pineapple")
console.log(replace);//[ 'banana', 'lichi' ]
console.log(fruits);//[ 'mango', 'kiwi', 'pineapple', 'orange', 'apple' ]

//4.slice=>doest not modify the orginal array.
let game=["super-mario","gta","gta3","godOfWar","takken","pokemon","bgmi"]
let sliced=game.slice(2,4)// this remove lement form start idx to final-1 idx
console.log(sliced);//[ 'gta3', 'godOfWar' ]
console.log(game);

//5. Reverse array
let reverse=game.reverse()
console.log(reverse);//sort string in descending order. 
//6.Sort

let sort=game.sort()
console.log(sort);// sort as a alphabetically orer
*/
//important question
//1. Find Maximum and Minimum in Array
let number=[45,56,78,45,12,45,87,45454,65,54,121,454,54,58,78,78,78,78,164646,41546,4614,114,65]
let Max_no=(Math.max(...number))
console.log(Max_no);//164646
let Min_no=Math.min(...number)
console.log(Min_no);//12

//2.Find Duplicate Elements
 
let Duplicate_no=number.forEach(element => {
   if(element==number[element]){
      console.log(number[i]);
      
   }
   
});































