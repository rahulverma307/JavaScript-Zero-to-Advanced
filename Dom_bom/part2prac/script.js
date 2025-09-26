
//1.change textcontent on page

document.getElementById("btn").addEventListener('click',function(){
   let h1= document.getElementById("text")
   console.log(h1);
   h1.textContent="jai shree krishna"
   h1.style.color="orange"
})

//2.change bacckground of webpage
 document.getElementById("btn2").addEventListener('click',function(){
  let B=document.getElementById("black")  
 B.style.background="black"
 B.style.color="white"
 console.log(B);
})

//Write JS code to change the text of a <p> tag with id "para" when a button is clicked.
 
let click=document.getElementById("btn3")
click.addEventListener('click',function(){
    let parachange=document.getElementById("para")
    parachange.textContent="my name is vivek singh"
    console.log(parachange);
    
})

//How do you create a new element in DOM and add it to a webpage?
let para=document.createElement("p")
para.textContent="heloo,sir good morning"
document.getElementById("container").appendChild(para)
console.log(para);

