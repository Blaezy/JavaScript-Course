console.log("everything fine!");

// let TodoList = [
//   { taskName: "dinner tonight", taskDate: "2025-12-01", isBox: false },
// // ];

const TodoListStoredValue = JSON.parse(localStorage.getItem("TodoStorageKey"));
console.log(TodoListStoredValue);
let TodoList = TodoListStoredValue || [];

if (TodoList === null) TodoList = [];

// display the task in byDefault when refresh
defaultDate();
addTodoList();
allInOne();


// task display
function addTodoList() {
  let desInput = document.querySelector(".description");
  let deleteAllElement = document.querySelector(".delete-all-button");

  if (TodoList.length === 0) {
    desInput.innerHTML = `No tasks yet. Add something to get started.`;
    deleteAllElement.classList.add("delete-all-button-opacity");
  } else {
    desInput.innerHTML = ``;
    deleteAllElement.classList.remove("delete-all-button-opacity");
  }

  let todoListElement = document.querySelector(".js-todolist");
  todoListElement.innerHTML = "";

  if (TodoList) {
    TodoList.forEach((value, index) => {
      // const task = TodoList[index];
      let taskHTML = `
        <div class="new-task-js" >
          <input type="checkbox" name="tasks" class="task-checkbox-js-${index} task-checkbox task-checkbox-js" >
          <div class="taskname-js-${index} taskname">${value.taskName}</div>
          <div>${value.taskDate}</div>
          <button class="delete-button delete-button-js" >Delete</button>
        </div>
    `;
      todoListElement.innerHTML += taskHTML;
    });

    document.querySelectorAll(".delete-button-js")
    .forEach((deleteButtonElement,index)=>{
      deleteButtonElement.addEventListener('click',()=>{
        TodoList.splice(index,1);
        addTodoList();
        allInOne();
      })
    })

    document.querySelectorAll(".task-checkbox-js")
      .forEach((taskCheckboxElement,index) =>{
        taskCheckboxElement.addEventListener('click',()=>{
          updateCheckbox();
          allInOne();
        })
      })
  }
}

document.querySelector(".delete-all-button").addEventListener('click',deletingAll);
document.querySelector(".button-js").addEventListener('click', () =>{
  getInputbutton();
});




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


// input Todos from "Enter"

document
  .querySelector(".todo-input-js")
  .addEventListener("keydown", (Event) => {
    if (Event.key === "Enter") {
      getInputbutton();
    }
  });


// updating the isbox

function updateCheckbox() {
  TodoList.forEach((_, index) => {
    let newClassName = `.task-checkbox-js-${index}`;
    const box = document.querySelector(newClassName);

    let taskObject = TodoList[index];
    taskObject.isBox = box.checked;

    // console.log(TodoList[i]);
  });
}

// updating the isbox display
function updateCheckboxDisplay() {
  TodoList.forEach((_, index) => {
    let newClassName = `.task-checkbox-js-${index}`;
    const box = document.querySelector(newClassName);

    let taskObject = TodoList[index];
    box.checked = taskObject.isBox;
  });
}
// creating the line through effect
function makeMiddleLine() {
  TodoList.forEach((_, index) => {
    let newClassName = `.taskname-js-${index}`;
    const inputElement = document.querySelector(newClassName);

    let taskObject = TodoList[index];

    if (taskObject.isBox) {
      inputElement.classList.add("line-through-para");
    } else {
      inputElement.classList.remove("line-through-para");
    }
  });
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

  buttonElement.addEventListener("click", () => {
    console.log(TodoList);
  });
}

// Delete all TodoList and stored data
function deletingAll() {
  TodoList = [];
  addTodoList();
  calculatePercentage();
  localStorage.removeItem("TodoStorageKey");
}

function allInOne() {
  storeLocalData();
  updateCheckboxDisplay();
  makeMiddleLine();
  calculatePercentage();
}

//  changing the Date to default today date
function defaultDate() {
  const today = new Date().toISOString().split("T")[0];
  document.querySelector(".date-input-js").value = today;
}

// TODO: Add Local save in the page
function storeLocalData() {
  const strTodoList = JSON.stringify(TodoList);
  localStorage.setItem("TodoStorageKey", strTodoList);
}
