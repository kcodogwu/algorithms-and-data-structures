'use strict';

const numbers = [];
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 3, 4, 5, 6, 7];
const sum = numbers1[0] + numbers1[1] + numbers1[2] + numbers1[3] + numbers1[4];
let sum1 = 0;
let a = 0;
let b = 0;

while (true) {
    numbers[a] = a + 1;
    a++;

    if (a == 1000000) {
        console.log(numbers); // prints content of the numbers array
        break;
    }
}

console.log(sum); // >> 15

while (true) {
    sum1 += numbers2[b];
    b++;

    if (b == numbers2.length) {
        console.log(sum1); // >> 28
        break;
    }
}


