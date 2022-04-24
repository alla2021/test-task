const chooseOptimalDistance = (t, k, ls) => {
  let result = []; //search all dictance
  function searchAllOptions(array, i) {
    if (array.length === k) {
      let sumDistance = 0;
      array.forEach((item) => (sumDistance += item));
      result.push(sumDistance);
      // console.log(result)
      return;
    }
    if (ls.length < i + 1) {
      return;
    }
    searchAllOptions(array.concat(ls[i]), i + 1);
    searchAllOptions(array, i + 1);
  }
  searchAllOptions([], 0);

  result = [...new Set(result.filter((item) => item <= t))];
  // console.log(result)

  if (result.length != 0) {
    const arr = result;
    return Math.max(...arr);
  } else if (ls.length < k) return null;
  else if (k < 1) return null;
  else if (t < 0) return null;
};

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseOptimalDistance(163, 3, [50])); // null
console.log(chooseOptimalDistance(230, 3, [ 91, 74, 73, 85, 73, 81, 87]))//228

