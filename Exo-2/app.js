// Tableau pour stocker les tâches
let tasks = [];

// Séléctionner les éléments HTML
const newTaskInput = document.getElementById("newTaskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskStats = document.getElementById("taskStats");

// Fonction pour ajouter une nouvelle tâche
function addTask() {
    const taskName = newTaskInput.value.trim();
    if (taskName !== "") {
        tasks.push({ name: taskName, completed: false });
        newTaskInput.value = "";
        displayTasks();
    }
}

// Fonction pour afficher toutes les tâches
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
        taskItem.innerHTML = `
            ${task.name}
            <div>
                <button class="btn btn-success btn-sm me-2" onclick="markTaskAsCompleted(${index})">Terminée</button>
                <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Supprimer</button>
            </div>
        `;
        if (task.completed) {
            taskItem.classList.add("list-group-item-success");
        }
        taskList.appendChild(taskItem);
    });
    displayTaskStats();
}

// Fonction pour marquer une tâche comme terminée
function markTaskAsCompleted(taskIndex) {
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks[taskIndex].completed = true;
        displayTasks();
    }
}

// Fonction pour supprimer une tâche
function deleteTask(taskIndex) {
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks.splice(taskIndex, 1);
        displayTasks();
    }
}

// Fonction pour afficher le nombre total de tâches et le nombre de tâches terminées
function displayTaskStats() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    taskStats.textContent = `Nombre total de tâches : ${totalTasks} | Nombre de tâches terminées : ${completedTasks}`;
}

// Gestionnaire d'événement pour le bouton d'ajout de tâche
addTaskButton.addEventListener("click", addTask);

// Afficher initialement les tâches
displayTasks();
