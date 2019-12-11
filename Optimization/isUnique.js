// Without Caching O(n^2)
let isUnique = (...args) => {
  let result = true;

  args.forEach((value1, index1) => {
    args.forEach((value2, index2) => {
      index1 !== index2 && value1 === value2 && (result = false);
    });
  });

  return result;
};

console.log('Tests');
console.log(isUnique(...[1, 2, 3]) === true);
console.log(isUnique(...[1, 1, 3]) === false);

// With Caching O(n)
isUnique = (...args) => {
  let result = true;
  let cache = {};

  for (let i = 0; i < args.length; i++) {
    !cache[args[i]] ? (cache[args[i]] = true) : (result = false);
  }

  return result;
};

console.log('Tests');
console.log(isUnique(...[1, 2, 3]) === true);
console.log(isUnique(...[1, 1, 3]) === false);
