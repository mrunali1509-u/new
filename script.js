const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");
const taskCount = document.getElementById("taskCount");

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.className = "task";

    const span = document.createElement("span");
    span.textContent = taskText;

    // Mark task as completed
    span.addEventListener("click", function () {
        li.classList.toggle("completed");
        updateTaskCount();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateTaskCount();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();

    updateTaskCount();
}

// Update task counter
function updateTaskCount() {
    const tasks = document.querySelectorAll(".task");
    const completed = document.querySelectorAll(".task.completed");

    const remaining = tasks.length - completed.length;

    taskCount.textContent =
        `${remaining} ${remaining === 1 ? "task" : "tasks"} remaining`;
}

// Clear all tasks
clearBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
    updateTaskCount();
});

// Add task using button
addBtn.addEventListener("click", addTask);

// Add task by pressing Enter
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Initial count
updateTaskCount();
