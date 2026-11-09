// Load saved academic tasks
let tasks = JSON.parse(localStorage.getItem("academicTasks")) || [];

// Display tasks on the page
function displayTasks() {

const taskList = document.getElementById("taskList");

if (!taskList) return;

taskList.innerHTML = "";

tasks.forEach((task, index) => {

const li = document.createElement("li");

if (task.completed) {
li.classList.add("completed");
}

const taskName = document.createElement("span");
taskName.textContent = task.name;

const completeButton = document.createElement("button");
completeButton.textContent = task.completed ? "Undo" : "Complete";

completeButton.onclick = function() {
tasks[index].completed = !tasks[index].completed;
saveTasks();
};

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";

deleteButton.onclick = function() {
tasks.splice(index, 1);
saveTasks();
};

li.appendChild(taskName);
li.appendChild(completeButton);
li.appendChild(deleteButton);

taskList.appendChild(li);

});

}

// Add a new academic task
function addTask() {

const input = document.getElementById("taskInput");

const taskName = input.value.trim();

if (taskName === "") {
alert("Please enter an academic task!");
return;
}

tasks.push({
name: taskName,
completed: false
});

input.value = "";

saveTasks();

}

// Save tasks in browser storage
function saveTasks() {

localStorage.setItem("academicTasks", JSON.stringify(tasks));

displayTasks();

}

// Display saved tasks when page opens
displayTasks(); // Contact form validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
contactForm.addEventListener("submit", function(event) {
event.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const message = document.getElementById("message").value.trim();
const formMessage = document.getElementById("formMessage");

if (!name || !email || !phone || !message) {
formMessage.textContent = "Please fill in all fields.";
formMessage.style.color = "red";
return;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
formMessage.textContent = "Please enter a valid email address.";
formMessage.style.color = "red";
return;
}

const phonePattern = /^\d+$/;

if (!phonePattern.test(phone)) {
formMessage.textContent = "Please enter numbers only in the phone field.";
formMessage.style.color = "red";
return;
}

formMessage.textContent = "Thank you, " + name + "! Your form has been validated successfully.";
formMessage.style.color = "green";

contactForm.reset();
});
}

