const removeEggs = (arr) => {
  let temp = 0;
  const result = arr.filter((value) => {
    if (temp <= 2) {
      temp++;
      return value !== "egg";
    } else return true;
  });
  return result;
};

console.log(removeEggs(["egg", "apple", "egg", "egg", "ham"]));
