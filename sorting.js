exports.bubbleSort = array => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        //Swap the numbers
        let temp = array[j]
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
  return array;
};

exports.selectionSort = array => {
  const length = array.length;
  let selected;
  for (let i = 0; i < length; i++) {
    selected = i;
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[selected]) {
        selected = j;
      }
    }
    let temp = array[i];
    array[i] = array[selected];
    array[selected] = temp;
  }
  console.log(array);
  return array
};

exports.insertionSort = array => {
  //   useful when the list is almost sorted
  //  test case On or O1
  let result = [array[0]];
  //  set first element of arr to frst element of result

  const shift = (inputArr, start) => {
    let newArr = [];
    for (let x = start; x < inputArr.length; x++) {
      const element = inputArr[x];
      // console.log(element);
      if (x >= start) {
        newArr.push(element);
      }
    }
    return newArr;
  };

  const insert = (toInsert, inputArr) => {
    const inputLength = inputArr.length;
    if (toInsert > inputArr[inputLength - 1]) {
      inputArr.push(toInsert);
      return inputArr;
    } else {
      const leftArr = [];
      let shiftStartIndex;
      for (let x = 0; x <= inputLength - 1; x++) {
        const curr = inputArr[x];
        if (toInsert < curr) {
          leftArr.push(toInsert);
          shiftStartIndex = x;
          break;
        }
        if (curr < toInsert) {
          leftArr.push(curr);
        }
      }
      const rightArr = shift(inputArr, shiftStartIndex);
      return [...leftArr, ...rightArr];
    }
  };

  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    const r = insert(element, result);
    result = r;
  }
  console.log(result);
};

exports.mergeSort = input => {

  let dividedArr = [];

  const mergeSort = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      const leftElement = left[leftIndex];
      const rightElement = right[rightIndex];
      if (leftElement < rightElement) {
        result.push(leftElement)
        leftIndex++;
      } else {
        result.push(rightElement);
        rightIndex++;
      }
    }
  };

  const merge = array => {
    if (array.length > 1) {
      const middle = Math.ceil(array.length / 2);
      const left = array.slice(0, middle);
      const right = array.slice(middle);
      merge(left);
      merge(right);
    } else {
      dividedArr.push(array);
    }
  }
  merge(input);
  console.log(dividedArr);
};