// console.log("Jai Shree Ram");

//sum  of num 1 to 5

let sum=0;
let i=1;
while(i<=100){
    sum=sum+i;
    i++;
}
  console.log(sum);

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
store each tea type in an array named 'teaCollection'*/

let teaCollection=[];
let tea;
do{
  tea=prompt("enter tea name")
  if(tea!=="stop"){
   teaCollection.push(tea)
 }
}while(tea!=="stop") //run browser just copy and paste

/* write a `do while` loop that adds numbers from  1 to 3
and stores the result in a variable named `total`*/

let total=0;
let k=1;
do{
   total+=k;
   k++;
}while(k<=3);

console.log(total);

/*5.write a `for` loop that multiplies each element in the
 array`[2,4,6]by 2 and stores the result in an ew array named `multipliedNumbers`
*/
//method 1
let array=[2,4,6];
let multipliedNumbers=array.map(val=>val*2)
console.log(multipliedNumbers);
// method 2
let multipliedNumbers1=[]
let number=[2,4,6]
for(let i=0;i<number.length;i++){
     let takeNumber= number[i]*2
      multipliedNumbers1.push(takeNumber)
}
console.log(multipliedNumbers1);


/*6.what a `for` loop that lists all the cities in the
array`["paris","new York","tokyo","London"] and stores each city in a
new array named `cityList`.
*/
let cityList=[]
let citites=["Paris","New York","Tokyo","London"]
for(let i=0;i<citites.length;i++){
  cityList.push(citites[i])
}
console.log(cityList);






  