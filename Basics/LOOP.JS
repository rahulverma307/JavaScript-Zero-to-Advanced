// console.log("Jai Shree Ram");

//sum  of num 1 to 5
/*
let sum=0;
let i=1;
while(i<=100){
    sum=sum+i;
    i++;
}
  console.log(sum);*/

  /* 2. write while loop that counts down from 5 to 1 and
  stores the numbers in an array named 'coundown'*/

let countdown=[]
let i=5;
while(i>0){
   countdown.push(i)
   i--
}
console.log(countdown);

/* 3.write a `do while` loop that prompts a user to enter 
their favorite tea type until they enter "stop",
store each tea type in an array named 'teaCollection'
*/
let teaCollection=[]
let tea
do{
  tea=prompt("enter tea name")
  if(tea!=="stop"){
   teaCollection.push(tea)
 }
}while(tea!=="stop") 


  