'use strict';

const arr = [];
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array();
const arr3 = new Array(1, 2, 3, 4, 5);
const arr4 = new Array(10);
const objs = [1, 'Joe', true, null]; // array with elements of different data types 
const x = 7;
const arr5 = [1, 2, 3];

console.log(arr.length); // >> 0
console.log(arr1.length); // >> 5
console.log(arr2.length); // >> 0
console.log(arr3.length); // >> 5
console.log(arr4.length); // >> 10
console.log(Array.isArray(arr5)); // >> true
console.log(Array.isArray(x)); // >> false