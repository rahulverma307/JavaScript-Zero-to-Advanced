// console.log("jai Shree Ram");
// //1.
// function sayHello(name="prey lord shiva"){
//     console.log(`my name is rahul verma :${name}`);
// }
// setTimeout(() => {
//     sayHello()
// }, 4000);//after two second setTimeout print =>my name is rahul verma :prey lord shiv
// //2.
// for (let index = 0; index < 5; index++) {
//     const element = index*2;
//     console.log(element)  // this for print before setTimeout   
// }
//  setTimeout(() => {
//     console.log("tesla is good car");
    
//  }, 10000);
// //3.
//  setInterval(() => {
//     console.log("meri 20 lakh rupey per month ki job lagegi gi december end tak 2025");
    
//  }, 1000);


//Revision
//Example:1
// console.log("hello");
// setTimeout(() => {
//     console.log("i am rahul");
    
// }, 2000);

// console.log("Namaste");
/*out
hello
Namaste
i am rahul after 2 sec
Because setTimeout is asynchronous → JS didn’t stop, it printed "End" first. */

//Example:2. Multiple Timers
// console.log("start");
// setTimeout(() => {
//     console.log("Loading..");
    
// }, 1000);
// setTimeout(()=>{
//     console.log("Done!");
    
// },3000)

 //Example:3.Interval Counter
// let count=0

// const timer=setInterval(() => {
//     count++;
//     console.log("Tick",count);
//     if(count===5){
//         clearInterval(timer)
//         console.log("stoped");
        
//     }
    
// }, 1000);

//Example:4=>Q: Function that calls callback after 2s with "Data ready".

// function getMessage(callback){
//     setTimeout(() => {
//         callback("data is ready")
//     }, 2000);
// }
 
// getMessage(msg => console.log("msg"));

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(user => console.log("Name:", user.name))
  .catch(err => console.error(err));

