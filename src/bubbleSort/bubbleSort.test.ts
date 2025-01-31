import { bubbleSort } from "./bubbleSort";

test("Bubble Sort", () => {
  expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
});
