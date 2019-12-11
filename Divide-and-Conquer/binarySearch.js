let binarySearch = (list, item) => {
  let min = 0;
  let max = list.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    if (list[guess] === item) {
      return guess;
    } else if (item > list[guess]) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
};

const test = bool => {
  return bool ? 'Test Passed' : 'Test failed';
};

console.log(test(binarySearch([2, 6, 7, 90, 103], 90) === 3));
