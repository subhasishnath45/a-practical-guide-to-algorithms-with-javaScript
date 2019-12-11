const memoize = func => {
  const cache = {};

  return (...args) => {
    let [n] = args;
    if (n in cache) return cache[n];

    cache[n] = func(n);
    return cache[n];
  };
};

const factorial = memoize(num => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
});

const test = bool => {
  return bool ? 'Test Passed' : 'Test failed';
};

console.log(test(factorial(5) === 120)); // calculated
console.log(test(factorial(5) === 120)); // cached
console.log(test(factorial(6) === 720)); // cached calculated
console.log(test(factorial(6) === 720)); // cached
