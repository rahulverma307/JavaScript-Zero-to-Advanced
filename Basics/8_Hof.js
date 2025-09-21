// console.log("JAI SHREE RAM");

//HOF taking function ass argument

function greet(name){
    return `hello! ${name}`
}
function process(callback){
   return callback("rahul")
}
console.log(process(greet));

//2. Give real-life examples of HOF in JavaScript.
//ans=>Array methods (map, filter, reduce, forEach, sort) are Higher Order Functions.
//map=>map: returns a new array after applying function.
let arr= [1,2,3,5,4,7,8]
let twice=arr.map(num=>num*2)
console.log(twice);
//fillter=>filter: returns elements that satisfy a condition.
let arr1=[45,78,9,7,5,2,,6]
let greater=arr1.filter(num=>num>5)
console.log(greater);

// 4.mplement your own map function using HOF.

function myMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

console.log(myMap([1, 2, 3], x => x * 2)); // [2, 4, 6]

//6. Explain reduce with an example.
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

//8. Create a function that returns another function (closure + HOF).
 
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

//9. Can you explain setTimeout and setInterval as HOFs?
setTimeout(() => console.log("Hello after 2s"), 2000);

