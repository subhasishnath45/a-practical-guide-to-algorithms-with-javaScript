const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

// Basic implementation
const bubbleSortBasics = array => {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  for (let i = 0; i < array.length; i++) {
    countOuter++;
    for (let j = 1; j < array.length; j++) {
      countInner++;
      if (array[j - 1] > array[j]) {
        countSwap++;
        swap(array, j - 1, j);
      }
    }
  }

  console.log('countOuter', countOuter);
  console.log('countInner', countInner);
  console.log('countSwap', countSwap, '\n');
  return array;
};

console.log('Basic implementation');
bubbleSortBasics([70, 28, 9, 2, 1, 4, 3, 0]); //?

// Optimized
const bubbleSort = array => {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  let swapped;
  do {
    countOuter++;
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      countInner++;
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        countSwap++;
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);

  console.log('countOuter', countOuter);
  console.log('countInner', countInner);
  console.log('countSwap', countSwap, '\n');
  return array;
};

console.log('Optimized implementation');
bubbleSort([70, 28, 9, 2, 4, 3, 1]); //?
