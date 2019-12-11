// Without Caching O(n^2)
let uniqSort = (...args) => {
  const result = [];

  args.forEach(value => {
    !result.includes(value) && result.push(value);
  });

  return result.sort((a, b) => a - b);
};

console.log('Tests');
console.log(uniqSort(...[4, 2, 2, 3, 2, 2, 2]).join('') === [2, 3, 4].join(''));

// With Caching O(n)
uniqSort = (...args) => {
  const result = [];
  const cache = {};

  args.forEach(value => {
    if (!cache[value]) {
      cache[value] = true;
      result.push(value);
    }
  });

  return result.sort((a, b) => a - b);
};

console.log('Tests');
console.log(uniqSort(...[4, 2, 2, 3, 2, 2, 2]).join('') === [2, 3, 4].join(''));
