
//create Element and Append Child
document.getElementById("btn").addEventListener('click',function(){
    let para=document.createElement("p")
    let head=document.createElement("h1")
    para.textContent="hello sir my name is rahul verma . and i am from agra .currently purshuing b.tech from galgotias college of engineering and technology"
    para.style.color="skyBlue"
    document.getElementById("container").appendChild(para)
       //for add extra text
    document.getElementById("container").append(para,"and i happy")
    head.textContent="namste ji"
    document.getElementById("container").append(head)
   console.log(para);
   console.log(head);
   
   // we add multiple element using creatElement
    
})


// remove child

document.getElementById("removebtn").addEventListener('click',function(){
    let parent=document.getElementById("parents")
    let child=document.getElementById("child")
    parent.remove(child)
    //Removes a specific child element from the parent.
})

//replaceChild

document.getElementById("btn3").addEventListener("click",function(){
    let parent1=document.getElementById("parent3")
    let oldnode=document.getElementById("old")
    let newnode=document.createElement("p")
    newnode.textContent="hello sir ji";
    parent1.replaceChild(newnode,oldnode)
    console.log(parent1);
    
})