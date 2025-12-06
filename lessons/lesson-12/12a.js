// this is normal function
function greet() {
  console.log("hello world");
}

greet();

// this is value function

const greet1 = function () {
  // this is anonymous function without name
  console.log("greeting again");
};

greet1(); // call by variable name

const obj1 = {
  name: "bob",
  attack: function () {
    // inside a object, function is called 'Method'
    console.log("damage- 10");
  },
};

obj1.attack();

// giving function as a parameter
function display(val) {
  console.log(val);
  val();
}

const fun = function () {
  console.log("I'm having fun");
};

display(fun);
