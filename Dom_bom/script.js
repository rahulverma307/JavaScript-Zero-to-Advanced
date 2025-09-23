// console.log("jia shree ram");
// console.log(window);//bom topic

// console.log(document.getElementsByTagName("h1"));
//DOM Part=2
//challenges
  
//Example 1\=
/*1st method
let hold =document.getElementById("changeTextButton")
console.log(hold)*/
//example=>change pragraph content
// method=>2 use addEventListener add

document.getElementById("changeTextButton").addEventListener('click', function (){
    let paragraph=document.getElementById("myParagraph")
    console.log(paragraph);
//    console.log(paragraph.textContent);// this print only paragraph thing
 paragraph.textContent="my name is rahul verma "// this change the paragraph content
    
})

//example 2 highlight the first element of ul

document.getElementById("highlightFirstCity").addEventListener('click', function() {
  let cities = document.getElementById("citiesList");
//   console.log(cities.firstElementChild.classList);
cities.firstElementChild.classList.add("highlight")
console.log(cities.firstElementChild.classList.add("highlight")); 
});

//example 3
// change order latte into Espresso and change color
document.getElementById("changeOrder").addEventListener("click",function(){
  let coffeType=document.getElementById("coffeType")
  coffeType.textContent="Espresso"
  
  // coffeType.classList.add("highlight") change color in yellow and other method is
  coffeType.style.backgroundColor="brown" // change Espresso Color
  coffeType.style.padding="5px"// change Padding
  console.log(coffeType);
})

//Example 4
// add new elemnt in the listt
document.getElementById("addNewitem").addEventListener("click",function(){
   let newItem=document.createElement('li')
   newItem.textContent="Eggs"
   document.getElementById("ShoppingList").appendChild(newItem)
})

//Example 5
// remove Element in the list
document.getElementById("removeLastTask").addEventListener("click",function(){
let task= document.getElementById("tasklist")
task.lastElementChild.remove()// remove last elemet
})

//Example 6:
// Event Delegation click=>work if we click on button,and dbclick=>if we bouble  click on button
document.getElementById("clickButton").addEventListener('mouseover', function(){
  alert("chaiCode")
})

//exmaple 7
// select element
document.getElementById("teaList").addEventListener('click',function(event){
   if(event.target && event.target.matches('.teaItem')){
     alert("you selected "+ event.target.textContent)
   }
   
})

// Example 8 
// >>
document.getElementById("feedbackForm").addEventListener('submit',function(event){
  event.preventDefault();
  let feedback=document.getElementById("feedbackInput").value
  console.log(feedback);
  document.getElementById("feedbackDisplay").textContent= `Feedback is:${feedback}`

  
})

//Example 9: DOM Content Loaded
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('domstatus')
})








 
