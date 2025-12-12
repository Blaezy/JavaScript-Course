const removeEggs = (arr) => {
  return arr.filter((value) => value !== "egg");
};

console.log(removeEggs(["egg", "apple", "egg", "egg", "ham"]));
