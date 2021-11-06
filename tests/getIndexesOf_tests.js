import {getIndexesOf, getIndexOf} from '../index.js';
import { isMatch } from '@writetome51/is-match';

let arr = [1, 'h', [3], 1, 'h', [3], 1, 'h', [3], 1, 'h', [3], 1, 'h', [3]];
let arrCopy = arr;

// Test 1
let indexes = getIndexesOf(1, arr);
if (isMatch(indexes, [0, 3, 6, 9, 12])) console.log('test 1 passed');
else console.log('test 1 FAILED');

// Test 1A: make sure original array is unchanged:
if (arr === arrCopy &&
	isMatch(
		arr,
		[1, 'h', [3], 1, 'h', [3], 1, 'h', [3], 1, 'h', [3], 1, 'h', [3]]
	)
) console.log('test 1A passed');
else console.log('test 1A FAILED');


// Test 2
indexes = getIndexesOf('h', arr);
if (isMatch(indexes, [1, 4, 7, 10, 13])) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3
indexes = getIndexesOf([3], arr);
if (isMatch(indexes, [2, 5, 8, 11, 14])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 3
indexes = getIndexesOf([3], arr, 1);
if (isMatch(indexes, [2])) console.log('test 3A passed');
else console.log('test 3A FAILED');


// Test 3B
indexes = getIndexesOf([3], arr, -1);
if (isMatch(indexes, [14])) console.log('test 3B passed');
else console.log('test 3B FAILED');


// Test 3C
indexes = getIndexesOf([3], arr, -3);
if (isMatch(indexes, [8, 11, 14])) console.log('test 3C passed');
else console.log('test 3C FAILED');


// Test 3D
indexes = getIndexesOf('h', arr, -3);
if (isMatch(indexes, [7, 10, 13])) console.log('test 3D passed');
else console.log('test 3D FAILED');


// Test 4: If value not found, should return empty array:
indexes = getIndexesOf(100, arr);
if (isMatch(indexes, [])) console.log('test 4 passed');
else console.log('test 4 FAILED');


let errorTriggered = false;

// Test 6: should trigger error if only 1 arg is passed:
errorTriggered = false;
try {
    // @ts-ignore
    getIndexesOf(arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7: should trigger error if second arg is object:
errorTriggered = false;
try {
    getIndexesOf(arr, {});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8
errorTriggered = false;
try {
    getIndexesOf(false, '');
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');



// speed test
arr = [];
let result;
let i = -1;
while (++i < 10000000) arr.push('');


// Check speed of getIndexOf()
let ms = Date.now();
result = getIndexesOf('', arr, -250);
ms = Date.now() - ms;
console.log(ms);

console.log(result);
