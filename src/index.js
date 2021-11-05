// function handleTodo(todo){
//     let p = document.createElement('p')
//     let btn = document.createElement('button')
//     btn.textContent = "Delete"
//     p.textContent = todo
//     p.appendChild(btn)
//     document.getElementById("tasks").appendChild(p)   
// }
document.querySelector("form").addEventListener('submit', (event) => {
    event.preventDefault();
    handleTodo(event.target.newTask.value)
    
}
)

function handleTodo(todo){
    let p = document.createElement("p")
    let btn = document.createElement("button")
    btn.addEventListener('click', handleDelete)
    btn.textContent = "Delete"
    p.textContent = `${todo}  `
    p.appendChild(btn)
    document.getElementById("tasks").appendChild(p)
}

function handleDelete(e){
    e.target.parentNode.remove()
}