const btn = document.getElementById("addTaskBtn")

btn.addEventListener("click", () => {
    let taskInput = document.querySelector("#taskInput")
    let taskValue = taskInput.value
    const taskList = document.getElementById("taskList")

    const li = document.createElement("li")
    li.innerHTML = `<span>${taskValue}</span>
     <button class="delete-btn">X</button>
    `

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });
    if (taskInput === "") {
        return alert("Adicione algo na lista")
    }
    li.querySelector(".delete-btn").addEventListener("click", () => li.remove());
    taskList.appendChild(li);
    taskInput.value = '';

})
