// Memoization in Global Scope
let times10 = n => n * 10;

const cache = {};

const memoTimes10 = n => {
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
let memoizedUtil = func => {
  const cache = {};

  return input => {
    if (cache[input]) {
      return cache[input];
    }
    cache[input] = func(input);
    return cache[input];
  };
};

const memoUtilTimes10 = memoizedUtil(times10);

console.log('Memoization with Closures Util');
console.log('calculated:', memoUtilTimes10(9));
console.log('cached:', memoUtilTimes10(9));
console.log('');

// Memoization with Generic Closure Util
const timesX = (n, x) => n * x;

memoizedUtil = (...[func, x]) => {
  const cache = {};

  return input => {
    if (cache[input]) {
      return cache[input];
    }
    cache[input] = func(input, x);
    return cache[input];
  };
};

const memoUtilTimes20 = memoizedUtil(timesX, 20);

console.log('Memoization with Generic Closures Util');
console.log('calculated:', memoUtilTimes20(9));
console.log('cached:', memoUtilTimes20(9));
