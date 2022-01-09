/**
 * Write body of function sortArray which sort array. Do not use standard array sort function.
 */

const unsortedArray: number[] = [ 34, 6, 12, 83, 34, -4, 8, 2, 51, -10, 47, 22, 58, 17 ];

console.log('Unsorted array:');
console.dir(unsortedArray);

function sortArray(unsortedArray: number[]): number[] {
  const arr = [ ...unsortedArray ];
  const length = arr.length;

  if (!length) {
    return [];
  }

  let p = arr[0];
  const a = [];
  const b = [];

  for (let i = 1; i < length; i++) {
    if (arr[i] < p) {
      a[a.length] = arr[i];
    } else {
      b[b.length] = arr[i];
    }
  }

  return sortArray(a).concat(p, sortArray(b));
}

const sortedArray = sortArray(unsortedArray);

console.log(' ');
console.log('Sorted array:');
console.dir(sortedArray);
