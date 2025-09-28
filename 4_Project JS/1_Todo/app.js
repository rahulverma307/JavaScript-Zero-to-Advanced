document.addEventListener("DOMContentLoaded",()=>{
const todoInput=document.getElementById("todo-input")
const addTaskButton=document.getElementById("add-task-btn")
const todoList=document.getElementById("todo-list")

let tasks=JSON.parse(localStorage.getItem('tasks') ) ||   [];
tasks.forEach(task =>renderTasks(task));

addTaskButton.addEventListener("click",function(){
   const taskText= todoInput.value.trim()
   if(taskText==="")return;

   const newTask={
    id:Date.now(),
    text:taskText,
    completed:false
   }
   tasks.push(newTask)
   saveTasks()
   todoInput.value=""//for clear input
   console.log(tasks);
   
});

function renderTasks(tasks){
   console.log(tasks.text);
   
}

function saveTasks(){
   localStorage.setItem("tasks",JSON.stringify(tasks))
}

})