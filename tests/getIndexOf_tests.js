import {getIndexOf} from '../index.js';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 'ÔÒ∏∏”', 16, 10];


// Test 1: error should happen if second arg is not array:
let errorTriggered = false;
try {
	let result = getIndexOf(5, 'abcdefgh');
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2: error should happen if `whichInstance` is not integer:
errorTriggered = false;
try {
	let result = getIndexOf(5, arr, 1.2);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: If value not found, it returns -1:
let result = getIndexOf(100, arr);
if (result === -1) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: If `whichInstance` is negative, it searches from end of array:
result = getIndexOf(10, arr, -1);
if (result === 14) console.log('test 4 passed');
else console.log('test 4 FAILED');

// Test 4: If `whichInstance` is negative, it searches from end of array:
result = getIndexOf(10, arr, -2);
if (result === 11) console.log('test 4A passed');
else console.log('test 4A FAILED');


// Test 5:
result = getIndexOf(10, arr);
if (result === 9) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6:
result = getIndexOf('ÔÒ∏∏”', arr);
if (result === 12) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 6:
result = getIndexOf('ÔÒ∏∏”', arr, -1);
if (result === 12) console.log('test 7 passed');
else console.log('test 7 FAILED');


arr = [1, [1], 2, [1, 2, [2]], 3, 4, [1, 2, [2]], [1], [1]];
result = getIndexOf([1, 2, [2]], arr);
if (result === 3) console.log('test 8 passed');
else console.log('test 8 FAILED');


result = getIndexOf([1, 2, [2]], arr, 2);
if (result === 6) console.log('test 9 passed');
else console.log('test 9 FAILED');


result = getIndexOf([1, 2, [2]], arr, 10);
if (result === 6) console.log('test 10 passed');
else console.log('test 10 FAILED');


let obj = {p: {a: 1}};
arr = [1, 2, obj, 3, 4, obj];
result = getIndexOf(obj, arr, -1);
if (result === 5) console.log('test 11 passed');
else console.log('test 11 FAILED');


arr = [1, 2, obj, 3, 4, obj];
result = getIndexOf(obj, arr, -2);
if (result === 2) console.log('test 12 passed');
else console.log('test 12 FAILED');


// speed test
arr = [];
let i = -1;
while (++i < 1000000) arr.push('');
result = getIndexOf('', arr, 1000000);
if (result === 999999) console.log('test 13 passed');
else console.log('test 13 FAILED');
