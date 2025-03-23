function carregarTarefas() {
    let taskNames = JSON.parse(localStorage.getItem('tasks')) || [];

    if (!Array.isArray(taskNames)) {
        taskNames = [];
    }

    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    taskNames.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${task.name}</span>
                        <button class="delete-btn">X</button>`;

        if (task.done) {
            li.style.backgroundColor = "rgba(115, 246, 115, 0.789)";
            li.style.textDecoration = "line-through"
            li.style.color = 'gray';
        } else {
            li.style.backgroundColor = "white";
            li.style.color = 'black';
        }

        taskList.appendChild(li);

        li.addEventListener("click", function () {
            
            taskNames[index].done = !taskNames[index].done;

            
            li.style.backgroundColor = taskNames[index].done ? "rgba(115, 246, 115, 0.789)" : "white";

            li.style.textDecoration = taskNames[index].done ? "line-through" : "none";

            li.style.color = taskNames[index].done ? "gray" : "black";


            localStorage.setItem('tasks', JSON.stringify(taskNames));
        });


        li.querySelector(".delete-btn").addEventListener("click", (event) => {
            event.stopPropagation();

            taskNames.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(taskNames));
            carregarTarefas();
        });
    });

    document.getElementById("taskInput").value = '';
}


document.getElementById("addTaskBtn").addEventListener("click", () => {
    let taskInput = document.querySelector("#taskInput");
    let taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Digite uma tarefa válida!");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (!Array.isArray(tasks)) {
        tasks = [];
    }

    tasks.push({ name: taskValue, done: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskInput.value = "";
    carregarTarefas();
});

carregarTarefas();
