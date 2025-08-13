// // let u = document.querySelector("ul");

// // function addToDo() {
// //     let li = document.createElement("li");
// //     li.innerHTML = `Todo 3 <button>❌</button>`;
// //     u.appendChild(li);
// // }

// // addToDo();
// let todo=
// {
//     id:"1",
//     title: "helllo",
//     status:"pending"

// }
// function addTodo(todo)
// {
//  let li = document.createElement("li");
//     li.innerHTML = `${todo.title}<button>❌</button>`;
//     ul.appendChild(li);
// }
// addToDo(todo);


// let ul = document.querySelector("ul");

// let todos = [
//     { id: "1", title: "watch tv", status: "pending" },
//     { id: "2", title: "study web development", status: "completed" },
//     { id: "3", title: "study recurssion", status: "pending" }
// ];

// function addTodo(todo) {
//     let li = document.createElement("li");
//     li.innerHTML = `${todo.title} <button>❌</button>`;
//     ul.appendChild(li);
// }

// function showAllTodos() {
//     ul.innerHTML = ""; // Clear existing list
//     todos.forEach(todo => addTodo(todo));
// }

// // Display all todos on page load
// showAllTodos();



let ul = document.querySelector("ul");
let input = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");

let todos = 
[
    { id: "1", title: "Hello", status: "pending" },
    { id: "2", title: "Buy milk", status: "completed" },
    { id: "3", title: "Read book", status: "pending" }
];

function addTodo(todo) 
{
    let li = document.createElement("li");
    li.innerHTML = `${todo.title} <button>❌</button>`;

 
    li.querySelector("button").addEventListener("click", () => {
        todos = todos.filter(t => t.id !== todo.id);
        showAllTodos();
    });

    ul.appendChild(li);
}

function showAllTodos()
{
    ul.innerHTML = ""; 
    todos.forEach(todo => addTodo(todo));
}


addBtn.addEventListener("click", () => {
    let title = input.value.trim();
    if (title) {
        let newTodo = {
            id: Date.now().toString(),
            title: title,
            status: "pending"
        };
        todos.push(newTodo);
        showAllTodos();
        input.value = ""; 
    }
});


showAllTodos();

