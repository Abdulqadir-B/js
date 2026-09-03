const arr = [1,2,3,4,5];

const output = arr.map((x) => {
    return x * 2;
});

console.log(output);

const output2 = arr.filter( (x) => {
    return x % 2 == 0;
})

console.log(output2);

const output3 = arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0);

console.log(output3);