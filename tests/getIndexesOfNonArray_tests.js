import {getIndexesOfNonArray} from '../privy/getIndexesOfNonArray.js';
import {arraysMatch} from '@writetome51/arrays-match';


let arr = [1, 2, 3, 4, [[1], [2]], 1, 2, 3, 4, [[1], [2]]];

// Test 1
let indexes = getIndexesOfNonArray(1, arr);
if (arraysMatch(indexes, [0, 5])) console.log('test 1 passed');
else console.log('test 1 FAILED');

// Test 1A
indexes = getIndexesOfNonArray(1, arr, 1);
if (arraysMatch(indexes, [0])) console.log('test 1A passed');
else console.log('test 1A FAILED');

// Test 1B
indexes = getIndexesOfNonArray(1, arr, 4);
if (arraysMatch(indexes, [0, 5])) console.log('test 1B passed');
else console.log('test 1B FAILED');

// Test 2
arr = ['abc', 2, 3, 4, [[1], [2]], 'abc', 2, 3, 4, [[1], [2]]];
indexes = getIndexesOfNonArray('abc', arr);
if (arraysMatch(indexes, [0, 5])) console.log('test 2 passed');
else console.log('test 2 FAILED');

// Test 2A
indexes = getIndexesOfNonArray('abc', arr, 0);
if (arraysMatch(indexes, [])) console.log('test 2A passed');
else console.log('test 2A FAILED');


// Test 2B
indexes = getIndexesOfNonArray('abc', arr, 2);
if (arraysMatch(indexes, [0, 5])) console.log('test 2B passed');
else console.log('test 2B FAILED');


// Test 3
arr = ['abc', 2, 3, false, [[1], [2]], 'abc', 2, 3, false, [[1], [2]]];
indexes = getIndexesOfNonArray(false, arr);
if (arraysMatch(indexes, [3, 8])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4
arr = [1, 2, 3, 4, 6, 2, 7, 8, 5, 2, 9, 9, 2, 1, 1];
indexes = getIndexesOfNonArray(2, arr);
if (arraysMatch(indexes, [1, 5, 9, 12])) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5
arr = [1, 2, 3, 4, [], 5, 6, 7, 8, 9, []];
indexes = getIndexesOfNonArray(100, arr);
if (arraysMatch(indexes, [])) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6: Error should trigger if second arg is not array:
let errorTriggered = false;
try {
	getIndexesOfNonArray(1, {});
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7: Error should trigger if second arg is empty array:
errorTriggered = false;
try {
	getIndexesOfNonArray(1, []);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');
