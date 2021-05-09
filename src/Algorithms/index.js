export const bubbleSort = (arr) => {
  const array = [...arr];
  let animations = [];
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      animations.push(i, i + 1);
      if (array[i] > array[i + 1]) {
        let active = array[i];
        array[i] = array[i + 1];
        array[i + 1] = active;
        animations.push([i, i + 1]);
        swapped = true;
      }
    }
  }
  return animations;
};

export const selectionSort = (arr) => {
  let animations = [];
  const array = [...arr];
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      animations.push(i);
      animations.push(j);
      if (array[min] > array[j]) {
        min = j;
      }
    }
    let active = array[i];
    array[i] = array[min];
    array[min] = active;
    animations.push([min, i]);
  }
  return animations;
};

export const insertionSort = (arr) => {
  let animations = [];
  const array = [...arr];
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j;
    animations.push(array.indexOf(current));
    if (array.indexOf(current) > 0) {
      animations.push(array.indexOf(current) - 1);
    }
    for (j = i - 1; j >= 0 && current < array[j]; j--) {
      animations.push(j);
      animations.push(j + 1);
      animations.push([j + 1, j]);
      array[j + 1] = array[j];
    }
    array[j + 1] = current;
  }
  return animations;
};

export const quickSort = (arr, outerAnimations = []) => {
  //[] outeranimations
  //[pivot, [left array], [right array]] - animations
  //[[pivot, [left array], [right array]]]
  //
  let animations = [];
  const array = [...arr];
  if (array.length <= 1) {
    return array;
  }
  let pivot = array.shift();
  animations.push(pivot);
  let leftAnimations = [];
  let left = array.filter((el, i) => {
    leftAnimations.push(i + 1);
    if (el < pivot) {
      leftAnimations.push([i + 1]);
    }
    return el < pivot;
  });
  animations.push(leftAnimations);
  let rightAnimations = [];
  let right = array.filter((el, i) => {
    rightAnimations.push(i + 1);
    if (el >= pivot) {
      rightAnimations.push([i + 1]);
    }
    return el >= pivot;
  });
  animations.push(rightAnimations);
  outerAnimations.push(animations);
  let leftSorted = quickSort(left, outerAnimations);
  let rightSorted = quickSort(right, outerAnimations);
  return outerAnimations;
};
