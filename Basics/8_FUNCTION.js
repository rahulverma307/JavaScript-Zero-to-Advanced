// // console.log("JAI SHREE RAM");

// //FUNCTION

// /*1. Write a function named `makeTea` that takes one parameter,`typeOfTea`,
// and returns a string like `"Making green tea "`when called with `"green tea".
// Store the result in a variable named`teaOrder`.*/
// function makeTea(typeOfTea){
//     return `Making ${typeOfTea}`;
// }

// let teaOrder=makeTea("greenTea");
// console.log(teaOrder);

// /*2. Create a functon named `orderTea` that takes one parameter,`teaType`.
// Inside this functon ,create another function named`confirmedOrder`that returns
// a message like`"Order confirmed for chai"`
// Call `confirmedOrder`from within `orderTea and return the result*/
// function orderTea(teaType){
//     function confirmedOrder(){
//         return `Order confirmed for chai ${teaType}`;
//     }
//     return confirmedOrder()
// }
// let orderConfirmation=orderTea("Lemon Tea")
// console.log(orderConfirmation);

// /*3.Write an arrow function named`calculateTotal` that
// takes two paramaters `price` and `quantity`. the 
// function should return the total cost by multiplying the
// `price` and `quantity`.
// Store the result in a variable named`totalCost`.*/
// function greet(){}//normal function
// const greet=() =>{}//arrow function

// const calculateTotal=(price,quantity)=>{
//        return price*quantity;
// }
// let totalCost=calculateTotal(5,5)
// console.log(totalCost);  
// //or
// const calculateTotal1=(price1,quantity1)=>  price1*quantity1;// only work in same line
// console.log(calculateTotal1(8,8));
// //this study more
// const testTwo=()=>
// {
//     console.log(this);
    
// }


// /*4.Write a funtion named `processteaOrder` that takes
// another function, `makeTea`, as a parameter and calls it
// with tha argument `"earl grey"`.
// Returns the result of calling `makeTea`.*/
// function makeTea(typeOfTea){
//     return `maketea: ${typeOfTea}`
// }

// function processteaOrder(teaFunction){
//     return teaFunction("early grey")
// }
// let order=processteaOrder(makeTea)
// console.log(order); 


// function processUser(fn,a,b){
//      return fn(a,b)
// }
// function score(a,b){
//     return a+b
// }
// console.log(processUser(score,4,5));

// /*5.Write a function named`createTeaMaker` that returns another
// function. the returned function should take one parameter,`teaType`,and return a
// message like `"Makaing green tae"`.
// Store the returned function in a variable named 
// teaMaker` and call it with`"Green tea".*/

// function createTeaMaker(name){
//     let score=522
//     return function(teaType){
//         return `Making ${name} ${teaType}  ${score}`;
//     }
// }
// let teaMaker=createTeaMaker("hitesh")
// let result =teaMaker("green tea")
// console.log(result);


//interview question function
/*1. What are functions in JavaScript and why do we use them?
ans=>Functions are reusable blocks of code that perform a specific task.
Interviewers often ask for definition + example.*/
function add(a,b){
    return a+b;
}
console.log(add(45,98));//143


/*2.Difference between Function Declaration vs Function Expression
ans=>mainly are hoisting behaviour*/
// Declaration (hoisted)
function greet() {
  return "Hello!";
}
console.log(greet());//Heloo!

// Expression (not hoisted)
const sayHi = function() {
  return "Hi!";
};
console.log(sayHi());//Hi!

/*3. What are Arrow Functions? How are they different from normal functions?
ans=>Used for short syntax, but they don’t have their own this, arguments, or prototype.*/
const multiply=(a,b,c)=> a*b*c//we dont use return if code right in single line
console.log(multiply(4,5,8));

/*4What is this inside a function?
ans=>Depends on how the function is called.
Normal function → this depends on caller.
Arrow function → this taken from enclosing scope (lexical).*/

/*5.Explain Function Hoisting.
ans.Function declarations are hoisted to the top, function expressions are not.*/

/*6.What is an IIFE (Immediately Invoked Function Expression)?
A function that runs as soon as it’s defined.
Used for data privacy and avoiding global scope pollution.*/
(function() {
  console.log("IIFE executed!");//IIFE executed!
})();

/*7.What are Higher-Order Functions?
ans=>Functions that take another function as an argument or return a function.
Example: map, filter, reduce.*/

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); // [2, 4, 6]
console.log(doubled);

/*8. What is a Callback Function?
A function passed as an argument to another function.
Frequently asked in async interview questions.*/

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}
fetchData(msg=> console.log(msg));


/*99. What is a Closure?
A function that remembers its lexical scope even when executed outside of it.
One of the top 5 interview questions.*/

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

/*10. What is Currying in JavaScript?

ans=>Breaking down a function with multiple arguments into a series of functions with one argument each.*/

function curry(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(curry(1)(2)(3)); // 6

/*11. What is Function Binding (call, apply, bind)?

👉 Used to control this.*/

function greet(place) {
  console.log(`Hello ${this.name} ${this.Lname} from ${place}`);
}
const user = { name: "Rahul",Lname:"Verma" };

greet.call(user, "India");   // Hello Rahul from India
greet.apply(user, ["India"]); // Hello Rahul from India
const bound = greet.bind(user, "India");
bound();





