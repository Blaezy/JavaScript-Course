console.log("everything fine!");

const TodoList = [
  { taskName: "make dinner", taskDate: "2025-11-29", isBox: false },
  { taskName: "go for walk", taskDate: "2025-11-29", isBox: false },
  { taskName: "watch the VCT", taskDate: "2025-11-29", isBox: true },
];

// display the task in webPage

function addTodoList() {
  let todoListElement = document.querySelector(".js-todolist");
  todoListElement.innerHTML = "";

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

function updateCheckboxDisplay() {
  for (let i = 0; i < TodoList.length; i++) {
    let newClassName = `.task-checkbox-js-${i}`;
    const box = document.querySelector(newClassName);

    let taskObject = TodoList[i];
    box.checked = taskObject.isBox;
  }
}
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

function calculatePercentage() {
  let Total_task = TodoList.length;
  let current_task = 0;
  for (let i = 0; i < TodoList.length; i++) {
    let taskObject = TodoList[i];
    if (taskObject.isBox) {
      current_task++;
    }
  }
  const result = (current_task / Total_task) * 100;
  const result_display = `${Math.floor(result)}%`;

  const buttonElement = document.querySelector(".result-button-js");
  buttonElement.innerHTML = result_display;
}

function allInOne(){
  updateCheckboxDisplay();
  makeMiddleLine();
  calculatePercentage();
}


// TODO: Add Local save in the page
