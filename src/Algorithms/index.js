export const bubbleSort = (arr) => {
  const array = [...arr];
  let animations = [];
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      animations.push(i, i + 1);
      if (array[i] > array[i + 1]) {
        let active = array[i]; // save a copy of the first value
        array[i] = array[i + 1]; // overwrite the first value with the second value
        array[i + 1] = active;
        animations.push([i, i + 1]);
        swapped = true;
      }
    }
  }
  return animations;
};

export const selectionSort = (array) => {
  let animations = [];
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      animations.push(minIndex);
      animations.push(j);
      if (array[minIndex] > array[j]) {
        animations.push([minIndex, j]);
        minIndex = j;
      }
    }
    let active = array[i]; // save a copy of the first value
    array[i] = array[i + 1]; // overwrite the first value with the second value
    array[i + 1] = active;
  }
  return array;
};
