function addTask(){

let taskInput = document.getElementById("taskInput");

let task = taskInput.value;

if(task === ""){
alert("Enter a task");
return;
}

let li = document.createElement("li");

li.innerHTML = task + " <button onclick='removeTask(this)'>Delete</button>";

document.getElementById("taskList").appendChild(li);

taskInput.value = "";

}

function removeTask(button){
button.parentElement.remove();
}