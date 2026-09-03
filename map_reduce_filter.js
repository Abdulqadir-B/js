const arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];

// map
const output = arr.map((x) => {
  return x * 2;
});

console.log(output);

// filter
const output2 = arr.filter((x) => {
  return x % 2 == 0;
});

console.log(output2);

// reduce
const output3 = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

console.log(output3);

// NOTE : we can use this map filter reduce as many times as we want by chaining them by dot operator,
//  the result of one first level is passed to the next level and so on.
