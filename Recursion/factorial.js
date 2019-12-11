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

console.log('Tests');
console.log(factorial(5)); // calculated
console.log(factorial(5)); // cached
console.log(factorial(6)); // cached calculated
console.log(factorial(6)); // cached
