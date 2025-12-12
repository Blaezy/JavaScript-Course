const arr = [-2, 3, -5, 6];

console.log("original", arr);

// filter function
const result = arr.filter((value) => value >= 0);

console.log("filter", result);

// map function
const butter = result.map((value) => value * value);

console.log("map", butter);
