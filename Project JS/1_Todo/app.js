const todoInput=document.getElementById("todo-input")
const addTaskButton=document.getElementById("add-task-btn")
const todoList=document.getElementById("todo-list")

let tasks=[]
addTaskButton.addEventListener('click',function(){
   const tasktext= todoInput.value.trim()
   if(tasktext==="") return;
   
   const newTask={
    id:Date.now(),
    text:tasktext,
    completed:false

   }
   tasks.push(newTask)
   todoInput.value=""//cler input
   console.log(tasks);
   
})