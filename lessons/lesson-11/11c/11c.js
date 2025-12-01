console.log("everything fine!");

let TodoList = [];

// display the task in webPage

defaultDate();
addTodoList();
function addTodoList() {
  let desInput = document.querySelector(".description");
  let deleteAllElement = document.querySelector(".delete-all-button");

  if (TodoList.length === 0) {
    desInput.innerHTML = `Type something in 'Todo input' and press enter or click Add`;
    deleteAllElement.classList.add("delete-all-button-opacity");
  } else {
    desInput.innerHTML = ``;
    deleteAllElement.classList.remove("delete-all-button-opacity");
  }

  let todoListElement = document.querySelector(".js-todolist");
  todoListElement.innerHTML = "";

  if (TodoList.length > 0) {
    for (let i = 0; i < TodoList.length; i++) {
      const task = TodoList[i];
      let taskHTML = `
    <div class="new-task-js" >
      <input type="checkbox" name="tasks" class="task-checkbox-js-${i} task-checkbox" onclick="updateCheckbox();allInOne();">
      <div class="taskname-js-${i} taskname">${task.taskName}</div>
      <div>${task.taskDate}</div>
      <button class="delete-button" onclick="TodoList.splice(${i},1);addTodoList();allInOne();">Delete</button>
    </div>
    `;
      todoListElement.innerHTML += taskHTML;
    }
  }
}

// getting the input value from input text

function getInputbutton() {
  const inputTodo = document.querySelector(".todo-input-js");
  const inputDate = document.querySelector(".date-input-js");
  const taskName = inputTodo.value;
  const taskDate = inputDate.value;

  if (taskName != "") {
    TodoList.push({ taskName, taskDate, isBox: false });
    inputTodo.value = "";
  } else {
    alert("Todo name can't be empty");
  }

  addTodoList();
  allInOne();
}

// updating the isbox

function updateCheckbox() {
  for (let i = 0; i < TodoList.length; i++) {
    let newClassName = `.task-checkbox-js-${i}`;
    const box = document.querySelector(newClassName);

    let taskObject = TodoList[i];
    taskObject.isBox = box.checked;

    // console.log(TodoList[i]);
  }
}

// updating the isbox display
function updateCheckboxDisplay() {
  for (let i = 0; i < TodoList.length; i++) {
    let newClassName = `.task-checkbox-js-${i}`;
    const box = document.querySelector(newClassName);

    let taskObject = TodoList[i];
    box.checked = taskObject.isBox;
  }
}
// creating the line through effect
function makeMiddleLine() {
  for (let i = 0; i < TodoList.length; i++) {
    let newClassName = `.taskname-js-${i}`;
    const inputElement = document.querySelector(newClassName);

    let taskObject = TodoList[i];

    if (taskObject.isBox) {
      inputElement.classList.add("line-through-para");
    } else {
      inputElement.classList.remove("line-through-para");
    }
  }
}

function printConsole() {
  console.log(TodoList);
}

// calculating the percentage of checkbox
function calculatePercentage() {
  let Total_task = TodoList.length;
  let current_task = 0;
  for (let i = 0; i < TodoList.length; i++) {
    let taskObject = TodoList[i];
    if (taskObject.isBox) {
      current_task++;
    }
  }

  let result_display;
  if (Total_task > 0) {
    const result = (current_task / Total_task) * 100;
    result_display = `${Math.floor(result)}%`;
  } else {
    result_display = `%`;
  }

  const buttonElement = document.querySelector(".result-button-js");
  buttonElement.innerHTML = result_display;
}

function deletingAll() {
  TodoList = [];
  addTodoList();
  calculatePercentage();
}

function allInOne() {
  updateCheckboxDisplay();
  makeMiddleLine();
  calculatePercentage();
}

function inputKeyDown(event) {
  if (event.key === "Enter") {
    getInputbutton();
  }
}

function defaultDate() {
  const today = new Date().toISOString().split("T")[0];
  document.querySelector(".date-input-js").value = today;
}

// TODO: Add Local save in the page
