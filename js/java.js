const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todolist")

todoButton.addEventListener('click',addTodo)

function addTodo(e){
    e.preventDefault()

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    const newTodo =`<li>${todoInput.value}</li>
    <span><i class="fas fa-check-square"></i></span>
    <span><i class="fas fa-trash-alt"></i></span>`

    todoDiv.innerHTML = newTodo
    todoList.appendChild(todoDiv)

}
// function checkRemove(e){
//     const classList = [...e.target.classList]
//     // console.log(classList)
//     const ite

// }
const todos =[...todoList.childNodes];
todos.forEach((todo)=>{
    switch(e.target.value){
        case"all":
           todo.style.display = "flex";
           break;
        case "completed":
            if(todo.classList.containes("completed")){
                todo.style.display = "flex";
            }else{
                todo.style.display = "none";
            }
            break;
        case "uncopleted":
            if(todo.classList.containes("completed")){
                todo.style.display = "flex";
            }else{
                todo.style.display = "none";    



    }
})