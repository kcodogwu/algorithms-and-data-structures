'use strict';

const numbers = [];
const numbers2 = [];
let i = 0;

// Better way to copy content of one array to another is to create
// a function that copies the individual values of one array into another
const copy = (arr, arr1) => {
    let i = 0;

    while (true) {
        arr1[i] = arr[i];
        i++;
        if (i === arr.length) break;
    }
};

while (true) {
    numbers[i] = i + 1;
    i++;
    if (i === 10) break;
}

const numbers1 = numbers;

copy(numbers, numbers2);
console.log(numbers); // => 1,2,3,4,5,6,7,8,9,10
numbers[0] = 400;
console.log(numbers1[0]); // => 400, because of array reference
console.log(numbers2[0]); // => 1