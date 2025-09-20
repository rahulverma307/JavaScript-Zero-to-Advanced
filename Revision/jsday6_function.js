//function
/*
 function maketea(name){
   console.log(`my name is :${name}`);
 }
 maketea("rahul")*/
   //1
 function maketea(typeOfTea){
    return `making green tea ${typeOfTea}`
 }
 let teaOrder=maketea("green tea")
 console.log(teaOrder);
 
//2
function ordertea(teatype){
    function confirmOrder(){
        return`Order confirmed for chai`
    }
    return confirmOrder()
}
console.log(ordertea("masala chai"));//Order confirmed for chai
//3 arrow function
const calculateTotal=(price,quantity)=>{
    return `total cost is ${price*quantity}`
}
let totalcost=calculateTotal(45,55)
console.log(totalcost);
