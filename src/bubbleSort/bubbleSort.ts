// Code goes here

export const bubbleSort = (arr: number[]): number[] => {};

// Bubble Sort Solutions

export const bubbleSortSolutions = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] > arr[j]) {
        const temp = arr[j];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
