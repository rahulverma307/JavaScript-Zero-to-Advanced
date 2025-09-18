// console.log("JAI SHREE RAM");

//FUNCTION

/*1. Write a function named `makeTea` that takes one parameter,`typeOfTea`,
and returns a string like `"Making green tea "`when called with `"green tea".
Store the result in a variable named`teaOrder`.
function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}

let teaOrder=makeTea("greenTea");
console.log(teaOrder);*/

/*2. Create a functon named `orderTea` that takes one parameter,`teaType`.
Inside this functon ,create another function named`confirmedOrder`that returns
a message like`"Order confirmed for chai"`
Call `confirmedOrder`from within `orderTea and return the result
function orderTea(teaType){
    function confirmedOrder(){
        return `Order confirmed for chai ${teaType}`;
    }
    return confirmedOrder()
}
let orderConfirmation=orderTea("Lemon Tea")
console.log(orderConfirmation);*/

/*3.Write an arrow function named`calculateTotal` that
takes two paramaters `price` and `quantity`. the 
function should return the total cost by multiplying the
`price` and `quantity`.
Store the result in a variable named`totalCost`.*/
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
//this study more
// const testTwo=()=>
// {
//     console.log(this);
    
// }


/*4.Write a funtion named `processteaOrder` that takes
another function, `makeTea`, as a parameter and calls it
with tha argument `"earl grey"`.
Returns the result of calling `makeTea`.*/
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

/*5.Write a function named`createTeaMaker` that returns another
function. the returned function should take one parameter,`teaType`,and return a
message like `"Makaing green tae"`.
Store the returned function in a variable named 
teaMaker` and call it with`"Green tea".*/

function createTeaMaker(name){
    let score=522
    return function(teaType){
        return `Making ${name} ${teaType}  ${score}`;
    }
}
let teaMaker=createTeaMaker("hitesh")
let result =teaMaker("green tea")
console.log(result);





