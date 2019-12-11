// Memoization in Global Scope
let times10 = n => n * 10;

const cache = {};

let memoTimes10 = n => {
  if (cache[n]) {
    return cache[n];
  }

  cache[n] = times10(n);
  return cache[n];
};

console.log('Memoization in Global Scope');
console.log('calculated:', memoTimes10(9));
console.log('cached:', memoTimes10(9));
console.log('');

// Memoization with Closures (Cleaning up the global scope)
const memoizedClosureTimes10 = () => {
  const cache = {};

  return n => {
    if (cache[n]) {
      return cache[n];
    }
    cache[n] = times10(n);
    return cache[n];
  };
};

const memoClosureTimes10 = memoizedClosureTimes10();

console.log('Memoization with Closures');
console.log('calculated:', memoClosureTimes10(9));
console.log('cached:', memoClosureTimes10(9));
console.log('');

// Memoization with Closure Util
const memoize = func => {
  const cache = {};

  return (...args) => {
    const [input] = args;
    if (input in cache) return cache[input];

    cache[input] = func(input);
    return cache[input];
  };
};

memoTimes10 = memoize(times10);

console.log('Memoization with Closures Util');
console.log('calculated:', memoTimes10(9));
console.log('cached:', memoTimes10(9));
console.log('');

// Memoization with Generic Closure Util
const memoTimes20 = memoize(n => n * 20);
const memoTimes30 = memoize(n => n * 30);

console.log('Memoization with Generic Closures Util');
console.log('calculated:', memoTimes20(9));
console.log('cached:', memoTimes20(9));
console.log('calculated:', memoTimes30(9));
console.log('cached:', memoTimes30(9));
