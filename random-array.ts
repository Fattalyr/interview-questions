/**
 * Write function body to generate random array of integers with values from predefined range.
 */

function generateArray(length: number, range: [ number, number]): number[] {
  function randomInteger(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(randomInteger(range[0], range[1]));
  }

  return result;
}

const generatedArray = generateArray(10, [-20, 20]);

console.log('Generated array with elements from range:');
console.log(generatedArray);
