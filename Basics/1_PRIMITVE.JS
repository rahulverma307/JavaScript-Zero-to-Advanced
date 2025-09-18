// 1.NUMBER

let balance =120;
let anotherBalance= new Number(120);

console.log(balance);
console.log(anotherBalance);

console.log(typeof balance);//number
console.log(typeof anotherBalance);//object


//2.BOOLEAN

let isActive=true;
let isReallyActive=new Boolean(true)// that is not recommended way

console.log(isActive);
console.log(typeof isActive);//boolean
console.log(typeof isReallyActive);// object 

//3.null and undefined

let firstname;
console.log(firstname);//undefined

let lastName=null;
console.log(lastName);//null
console.log(typeof lastName);//object
console.log(typeof firstname);//undefined

//4.string

let myString="hello"//double qoute
let myStringOne='hola'//single quote
let username='rahul'

let oldGreet=myString+" "+'Rahul'
console.log(oldGreet);//hello Rahul


let greetMessage=`hello ${username}!`
console.log(greetMessage);//hello rahul 

let demo=`value of ${myStringOne} is ${45*45}`
console.log(demo);//value of hola is 2025

//5.Symbol

let sm1=Symbol();//generate unique value all the time
let sm2=Symbol();

console.log(sm1==sm2);//false
console.log(typeof sm1);//symbol
















