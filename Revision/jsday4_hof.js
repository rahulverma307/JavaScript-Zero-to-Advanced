// console.log("Jia shree ram");

//for of
let arr=[1,23,4,5,6,7,"4"]
for (const num of arr) {
   if(num===6){
    break
   }
    console.log(num);
    
}

//maps

const maps=new Map()
maps.set('IN',"India")
maps.set('USA',"anerica")
maps.set('FR',"france")
console.log(maps);//Map(3) { 'IN' => 'India', 'USA' => 'anerica', 'FR' => 'france' }
//forof loop in map
for (const [key,value] of maps) {
    console.log(key,":-",value);/*IN :- India
USA :- anerica
FR :- france*/
    
}

/// forin in object

let object={
    name:"rahul",
    Lname:"verma",
    rel:"hindu",
    mob:78787
}
for (const key in object) {
    console.log(key);
    console.log(`${key} shortcut is for ${object[key]}`);// use this for print key and value      
}

let game=["ludo","snake","gamble","cricket"]
for (const key in game) {
   console.log(key);//0 1 2 3 return idx no that problem for arr in forin
   console.log(game[key]);//value
}

///for each use normal functin
const coding=["js","ruby","go","rust","node","java"]  
coding.forEach(function(lan){
     console.log(lan);// js ruby go rust node java 
})
  // arrow function
coding.forEach((item)=>{
    console.log(item);
})

//another method

function printMe(item){
    console.log(item);  
}
coding.forEach(printMe)

//
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

// acces object inside array using for each

let arrObj=[
    {
        name:"rahulverma",
        class:"12"
    },
     {
        name:"rahulverma",
        class:"12"
    },
     {
        name:"rahulverma",
        class:"12"
    }
]
arrObj.forEach((item)=>{
    console.log(item.name );
    
})