// joinElements with Recursion
let joinElements = (...[array, joinString]) => {
  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    if (index === array.length - 1) {
      return resultSoFar;
    }

    return recurse(index + 1, resultSoFar + joinString);
  }

  return recurse(0, '');
};

const test = bool => {
  return bool ? 'Test Passed' : 'Test failed';
};

console.log(
  test(
    joinElements(['s', 'cr', 't cod', ' :) :)'], 'e') === 'secret code :) :)'
  )
);

// joinElements with For Loop
joinElements = (...[array, joinString]) => {
  const length = array.length;
  let result = '';

  array.forEach((ele, index) => {
    result += ele;
    index !== length - 1 && (result += joinString);
  });

  return result; //?
};

console.log(
  test(
    joinElements(['s', 'cr', 't cod', ' :) :)'], 'e') === 'secret code :) :)'
  )
);
