// this build-in function
// this require a function and value (in time 1s = 1000 mili-second, it takes value in mili-second)

const name1 = function () {
  console.log("my name is Blaezy");
};
setTimeout(name1, 5000);



// other line will run after timeout start when the function called , when function timeout end it will display

console.log("this is next line");

// this is setInterval this will loop the function when timeOut
const name2 = function () {
  console.log("my name is Bob");
};
let intervalID = setInterval(name2, 2000);

// clear the interval using his ID
clearInterval(intervalID);




// for each loop with array

["go to sleep", "watch tv", "make dinner"].forEach(function (value, index) {
  console.log("the value is:", value, "of index:", index);
});


const num = [2,3,4,5,6,7];

num.forEach(function(value,index){
  console.log(value);
})
