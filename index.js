const memorizeUtil = func => {
  const cache = {};

  return input => {
    return cache[input] || (cache[input] = func(input));
  };
};

const factorial = n => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(i * j * k);
  }
  for (let i = 0; i < 10; i++) {
    arr.push(i * j * k);
  }
  return arr;
};

const memorizedFactorial = memorizeUtil(factorial);

memorizedFactorial(5); //?.
memorizedFactorial(6); //?.
memorizedFactorial(20); //?.
memorizedFactorial(21); //?.

factorial(5); //?.
factorial(5); //?.

// const timesX = (n, x) => n * x;

// const memorized = cb => {
//   const cache = {};

//   const memorizedClosure = n => {
//     if (n in cache) {
//       return cache[n];
//     } else {
//       cache[n] = timesX(n, 10);
//       return cache[n];
//     }
//   };

//   return memorizedClosure;
// };

// const memoTimes10 = memorized(timesX);

// memoTimes10(5); //?.$
// memoTimes10(5); //?.$
// memoTimes10(3); //?.$
// memoTimes10(3); //?.$
