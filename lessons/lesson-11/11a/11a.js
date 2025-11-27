// console.log("hello let's see this work");

// const newArray = [11,22,33,44];

// console.log(newArray);

// console.log(newArray[2]);

// newArray[2] = 88;
// console.log(newArray);

// const example = [11, 'bobby', true, { age: 22, name: 'sam'}, [10,12,14]];
// console.log(example);
// console.log(example[3]);

// console.log(Array.isArray(example));
// console.log(typeof(example));

// newArray.push(99);
// console.log(newArray);

// newArray.pop();
// console.log(newArray);

// newArray.splice(1,2);  //info: remember its splice 
// console.log(newArray);

// console.log(newArray.length);  //info: length is not a function 


console.log("Testing Loops");

let i = 1;

while(i<= 4){
    console.log("i is : "+i);
    i++;
}

// new: total sum of array
const nums = [1,1,2,3,4,4];
let result = 0;

for(let i=0; i<nums.length; i++){
    result += nums[i]; 
}

console.log("total is:",result);

// new: make double of that array
const doubleArray = [];

for(let i=0; i<nums.length; i++){
    doubleArray[i] = nums[i]*2;
}
console.log(nums);
console.log(doubleArray);