const inputField = document.getElementById('input-field');
const taskListNode = document.getElementById('task-list');
const tasks = JSON.parse(localStorage.getItem('taskList')) || [];


document.addEventListener("DOMContentLoaded", function(){
    inputField.focus();
    inputField.addEventListener("keydown", function(event){
        if (event.key === "Enter") {
                addTask();
            }
        });
  
        taskListNode.addEventListener("click", checkTask);


        getTaskList();
    });
    function checkTask(event){
        let checkTasks = document.getElementsByTagName('LI')
        if (event.target.tagName === "LI"){
          event.target.classList.toggle('checked');
        }
        for (let i = 0; i < checkTasks.length; i++){
          if (checkTasks[i].className === "checked"){
            tasks.splice(i, 1);
          }
        }
        saveStorage();  
      }



function addTask() {
    let userInput = inputField.value;
    let task = {userInput, done: false}
    outputTasks();
    tasks.push(task);
    saveStorage();
    console.log(tasks);
    inputField.value = "";
}


function outputTasks(){
    let li = document.createElement('li');
    let userInput = inputField.value
    li.innerHTML = `${userInput}`;
        if (userInput !== ""){
            taskListNode.appendChild(li);
        } else {
            alert("You must type something");
        }
}

function saveStorage(){
    localStorage.setItem('taskList',JSON.stringify(tasks));
}

function getTaskList (){
    let taskList = JSON.parse(localStorage.getItem('taskList'));
    for (i = 0; i < taskList.length; i++){
        let li = document.createElement('li');
        li.innerHTML = `${taskList[i].userInput}`;
        taskListNode.appendChild(li);
    }

}

