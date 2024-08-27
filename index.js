const add = document.querySelector(".add");
const del = document.querySelector(".del");
const input = document.querySelector(".add-todo");
const ul = document.querySelector(".ul");

let allTodos = JSON.parse(localStorage.getItem("todos")) || [];

add.addEventListener("click", () => {
  if (input.value !== "") {
    const todoText = input.value;
    const todoParent = document.createElement("div");
    todoParent.className = "todo";
    const todo = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-todo";

    todoParent.appendChild(todo);
    todoParent.appendChild(deleteBtn);
    deleteBtn.textContent = "delete";

    deleteBtn.addEventListener("click", () => {
      todoParent.remove();
    });

    todo.innerHTML = input.value;

    ul.appendChild(todoParent);

    input.value = "";
    allTodos.push(todoText);
    localStorage.setItem("todos", allTodos);
  } else {
    alert("please provide todo first");
  }
});
