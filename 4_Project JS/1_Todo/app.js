document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo_List");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Render saved tasks on load
  tasks.forEach(task => renderTasks(task));

  // Add new task
  addTaskButton.addEventListener("click", function () {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks(newTask); // 👈 display new task
    todoInput.value = ""; // clear input
  });

  // Render function
  function renderTasks(task) {
   const li=document.createElement('li')
   if(task.completed) li.classList.add('completed')
   li.setAttribute('data-id',task.id)
   li.innerHTML=`
   <span>${task.text}</span>
   <button>delete</button>
   `;

   li.addEventListener('click',(e)=>{
     if(e.target.tagName==="BUTTON") return;
     task.completed=!task.completed
     li.classList.toggle('completed')
     saveTasks()
   })

   li.querySelector('button').addEventListener('click',(e)=>{
    e.stopPropagation();//prevent  toggle from 
    tasks=tasks.filter(t=>t.id !==task.id)
    li.remove();
    saveTasks();
   })

   todoList.appendChild(li)
    // Later you can append it to todoList
  }

  // Save tasks to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
