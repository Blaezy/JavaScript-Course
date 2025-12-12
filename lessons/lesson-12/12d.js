console.log("hello");

const fun = function (){
  console.log("double hello");
}

const fun1 = () =>{
  console.log("new hello ");
}


// one parameter function can be shorten (brackets of parameter can be removed if one parameter)

const oneParameter = nice => {
  console.log(nice + " shirt");
}
oneParameter("nice");


// one line function can be shorten (again curly brackets can be removed if only one line with return , return also be removed)

const oneFunction = () =>  33 + 77;
console.log(oneFunction());

// let's try can do both together one parameter and one line function 

const testingFun = fun => fun + 22;
console.log(testingFun(33));

const testingFun1 = hero => console.log(hero);
testingFun1("batman");
