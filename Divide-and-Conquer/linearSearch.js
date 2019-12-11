// first index
let linearSearch = (list, item) => {
  let index = -1;

  for (let i = 0; i < list.length; i++) {
    if (item === list[i]) return i;
  }

  return index;
};

const test = bool => {
  return bool ? 'Test Passed' : 'Test failed';
};

console.log(test(linearSearch([2, 6, 7, 90, 103, 90], 90) === 3));

// last index
linearSearch = (list, item) => {
  let index = -1;

  list.forEach((listItem, i) => {
    item === listItem && (index = i);
  });

  return index;
};

console.log(linearSearch([2, 6, 7, 90, 103, 90], 90) === 5);

// nth index
linearSearch = (list, item, n) => {
  let index = {};
  let count = 1;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      index[count] = i;
      count++;
    }
  }

  return index[n] ? index[n] : -1;
};

console.log(
  test(linearSearch([2, 6, 7, 90, 103, 30, 90, 70, 90, 15], 90, 1) === 3)
);
console.log(
  test(linearSearch([2, 6, 7, 90, 103, 30, 90, 70, 90, 15], 90, 2) === 6)
);
console.log(
  test(linearSearch([2, 6, 7, 90, 103, 30, 90, 70, 90, 15], 90, 3) === 8)
);

// array of indexes
linearSearch = (list, item) => {
  let indexes = [];

  list.forEach((listItem, i) => {
    listItem === item && indexes.push(i);
  });

  return indexes;
};

console.log(
  test(
    linearSearch([2, 6, 7, 90, 103, 30, 90, 70, 90, 15], 90).join('') ===
      [3, 6, 8].join('')
  )
);
