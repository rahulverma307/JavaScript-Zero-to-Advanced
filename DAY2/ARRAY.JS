//console.log("Jai Shree Ram");
//console.log("Har Har Mahadev")

//Array

/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors=["green tea","black tea","oolong tea"]

 let firstTea=teaFlavors[0]
console.log(firstTea);



/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities=["London","Tokyo","Paris","New York"]
let favoriteCity=cities[2]
console.log(favoriteCity);

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes=["herbal tea","white tea","masala chai"]
teaTypes[1]="jasmine tea"
console.log(teaTypes);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited=["Mumbai","Sydne"]
citiesVisited.push("Berlin")//end of the array
console.log(citiesVisited);//[ 'Mumbai', 'Sydne', 'Berlin' ]

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders=["chai","iced tea","matcha"]
teaOrders.pop()//remove last element from a array
console.log(teaOrders);//[ 'chai', 'iced tea' ]

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas=["green tea","oolong tea","chai"]
let softCopyTeas=popularTeas
popularTeas.pop()
console.log(softCopyTeas);
console.log(popularTeas);//soft copy If we make changes in the original array, then the changes are also reflected in the soft copy.

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities=["Berlin","Singapore","New York"]
let hardCopyCities=[...topCities]//use this for make a hard copy
topCities.pop()
console.log(hardCopyCities);
console.log(topCities);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
let europeanCities=["paris ","Rome"]
let asianCities=["tokyo","delhi"]
let worldCities=[...europeanCities,...asianCities]//use spred opearto or
let worldCities2=europeanCities.concat(asianCities)
console.log(worldCities2);
console.log(worldCities);//this two method of merge array

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu=["Masala Chai","ooloong tea","green tea","earl grey"]
let menuLength=teaMenu.length;
console.log(menuLength);


/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList=["kyoto","London","cape Town","vancouver"]
let isLondonInList=cityBucketList.includes("London")
console.log(isLondonInList);









