let task = []
let btnAddTask = document.querySelector("#btnAddTask")
let inputTask = document.querySelector("#task")
let divTask = document.querySelector("#taskes")
let numberOfTasks = document.querySelector("#numberOfTesks")

btnAddTask.addEventListener("click", () =>{
    let task = document.createElement("label")
    let checkbox = document.createElement("input")
    let container = document.createElement("div")

    checkbox.setAttribute("type","checkbox")
    task.innerText = inputTask.value
    task.push(container)

    task.forEach(
        (task) => divTask.appendChild(task)
    )
    numberOfTasks.innerText = task.length
})