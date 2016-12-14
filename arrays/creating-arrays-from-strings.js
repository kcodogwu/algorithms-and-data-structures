'use strict';

const sentence = 'the quick brown fox jumped over the lazy dog';
const words = sentence.split(' ');
let a = 0;

while (true) {
    console.log(`Word ${ a }: ${ words[a] }`); // display the word in the words array
    a++;

    if (a == words.length) break;
}