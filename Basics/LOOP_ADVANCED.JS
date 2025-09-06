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

  
