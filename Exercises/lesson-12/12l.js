console.log("fine");

const countPositive = (arr) => {
  let count = 0;
  arr.forEach((value, index) => {
    if (value > 0) count++;
  });
  return count;
};

console.log(countPositive([-2, 3, -5, 7, 10]));
