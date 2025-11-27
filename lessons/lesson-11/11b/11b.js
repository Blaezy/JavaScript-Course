console.log("everything fine!");

const TodoList = [];

// TodoList.push("hello");

function addTodoList() {
  let todoListElement = document.querySelector(".js-todolist");
  todoListElement.innerHTML = "";

  for (let i = 0; i < TodoList.length; i++) {
    const value = TodoList[i];
    let newValueHTML = `<p>${value}</p>`;
    todoListElement.innerHTML += newValueHTML;
  }
}

// console.log(TodoList);

function getInputbutton() {
  console.log("hey");
  const inputTodo = document.querySelector(".todo-input-js");
  TodoList.push(inputTodo.value);
  console.log(TodoList);
  inputTodo.value = "";

  addTodoList();
}
