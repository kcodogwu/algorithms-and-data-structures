'use strict';

/*
* The methods that work with regular expressions are
* regexp.exec, regexp.text, string.match, string.replace,
* string.search, and string.split.
*/ 

const parseUrl = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
const url = 'http://www.ora.com:80/goodparts?q#fragment';
const result = parseUrl.exec(url);
const names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
const blanks = '        ';
let i=0;
const parseNumbers = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
const checkNumber = (num) => console.log(parseNumbers.test(num));

while (true) {
    console.log(`${ names[i] }: ${ blanks.substring(names[i].length)}`, result[i]);
    i++;
    if (i === names.length) break;
}

checkNumber('1');
checkNumber('number');
checkNumber('98.6');
checkNumber('132.21.86.100');
checkNumber('123.45E-67');
checkNumber('123.45D-67');