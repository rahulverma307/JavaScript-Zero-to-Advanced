// console.log("JAi shree Ram")

//Conditional
//1.checking if a number is greater than another number:

let num1=22
let num2=32

if(num1>num2){
    console.log(`num1 is greater and value is: ${num1}`);
    
}else{
    console.log(`num2 is greater and value is:${num2}`);
    
}

//Cheking is a string is equal to another string

let UserName="vivek"
let AnotherUserName="viivek"

if(UserName==AnotherUserName){
       console.log("Pick another usernmae");
       
}else{
    console.log("you can pick this username");
    
}

//Checking if a variable is a number not:

let score=45
if(typeof score=== 'number'){
       console.log(`Yep This variable is num and value:${score}`);  
}else{
    console.log(`no that is not a number `);
}

//Check is a boolena value is true or false

let isTeaReady=true;
if(typeof isTeaReady==='boolean'){
    console.log('this is boolean value'); 
}else{
    console.log('this is not a boolean value'); 
}

//check is array is empty or not:

let items=[1];
let length=items.length;

if(items.length===0){
     console.log('array is empty'); 
}else{
    console.log(`array is not empty and lenght is ${length}`);
}

// possitive,negative ,zero

let number=5
if(number>0){
    console.log("NUmberis positve",number);
}else if(number<0){
    console.log("Number is negative",number);
    
}else{
    console.log("Number is zero",number);
    
}
