// console.log("Jai Shree Ram");

 /*1.write a `for` loop that loops through the array  
 ["green tea","black tea","chai","oolong tea"] and
  stops the loop when it finds "chai" .
  Store all teas before "chai" in a new array named 
  "selectedTeas"
  let selectedTeas=[]
  let array=["green tea","black tea","chai","oolong tea"]
  for(let i=0;i<array.length;i++){
    if(array[i]==="chai"){
        break;
    }
     selectedTeas.push(array[i])
  }
  console.log(selectedTeas);*/

  /*2.write a `for` loop that loops through the array`
   and skips
  "paris"
  store the other cities in a new array named `visitedCities`

  let cities=["London","New York","Paris","Berlin"];
  let visitedCities=[];
  for(let i=0;i<cities.length;i++){
     if(cities[i]==="Paris"){
        continue;
     }
     visitedCities.push(cities[i]) 
  }
  console.log(visitedCities);
  /*3.use a `for-of`loop to iterate through the array `[1,2,3,4,5]
  and stop when the number `4` is found.
  Store the numbers before `4` in an array named `smallNumbers`.
  */
/*
  let numbers=[1,2,3,4,5]
  let smallNumbers=[]
  for (const num of numbers) {
    if(num===4){
        break;
    }
       smallNumbers.push(num)
  }
  console.log(smallNumbers);
  
  */

  /*4.use for-of loop on array and skip 'herbal tea'
  store the other teas is an array named preferrefTeas*/
/*
  let teas=["chia","green tea","herbal","blacktea"]
  let preferrefTeas=[];
  for (const tea of teas) {
    if(tea==="herbal"){
      continue;
    }
    preferrefTeas.push(tea)
  }
  console.log(preferrefTeas);*/

/*5. USe a `for in` loop to loop through an object conatainng city population.
Stop the loop when the population of `"Berlin"` is
found and store all previous cities' population in a new object named `cityPopulation`.

let citiesPopulation={
"London":8900000,
"New York":8400000,
"Paris":2200000,
"Berlin":3500000
};*/

let citiesPopulation={
  "London":8900000,
  "New York":8400000,
  "Paris":2200000,
  "Berlin":3500000
};
let cityPopulation={}
for (const city in citiesPopulation) {
     if(citiesPopulation[city]===citiesPopulation["Berlin"]){
        continue;
     }
     cityPopulation[city]=citiesPopulation[city]
}
console.log(cityPopulation);


  
 /*6. use a `for-in loop to loop through a an object containing city population
 skip any city with a population below 3 million and store the rest in 
 object named`largeCities`.

 let worldCities={
 "Sydnet":5000000,
 "Tokyo":9000000,
 "Berlin":3500000,
 "Paris":2200000
 }*/

  let worldCities={
 "Sydnet":5000000,
 "Tokyo":9000000,
 "Berlin":3500000,
 "Paris":2200000
 };
 let largeCities={}
 for (const city in worldCities ) {
     if(worldCities[city]<3000000){
      continue;
     }
     largeCities[city]=worldCities[city]
 }
 console.log(largeCities);
 
 /*7 write a `forEach` loop that iterates through the array
 `["earl grey","green tea","chai","oolong tea"]`.
 stop the loop when "chia" is found, and store all
 previous tea types in an array named `availableTeas`.

 */
let teab=["earl grey","green tea","chai","oolong tea"]
 let availableTeas=[]
 teab.forEach(function(tea)  {
   if(tea==="chai"){
  return;
   }
   availableTeas.push(tea)
 });
 console.log(availableTeas);

 /*8.write a `forEach` loo that iterates through the array 
 `["Berlin","tokyo","Sydney","Paris"]`.
 Skip "Sydney" and store the other cities in a new
 array named `traveledCities`.

  */

 let favCity=["Berlin","tokyo","Sydney","Paris"]
 let traveledCities=[]
 favCity.forEach(desh => {
   if(desh==="Sydney"){
    return;
   }
   traveledCities.push(desh)
 });
 console.log(traveledCities);
 /*9.write a `for` loop that iterates through the array`
 [2,5,7,9]`.
 Skip the value`7` and multiply the rest by 2. Store
 the results in a new array named `doubleNumbers`.
  */ 

 let numA=[2,5,7,9];
 let doubleNumbers=[];
 for(let i=0;i<numA.length;i++){
  if(numA[i]===7){
    continue;
  }
  doubleNumbers.push(numA[i]*2);
 }
 console.log(doubleNumbers);
 
 /*10. Use a `for-of loop to iterste through the array`
 ["chai","green tea","black tea","jasmine tea","herbal tea"]
 and Stop when the lenght of the current tea name is greater than 10.
 Store the teas iterated over in an array named
 `shortTeas`
  */
  let Ctea= ["chai","green tea","black tea","jasmine tea","herbal tea"]
  let shortTeas=[]
  for (const elem of Ctea) {
    if(elem.length>10){
      break;
    }
    shortTeas.push(elem)
    
  }
  console.log(shortTeas);
    

