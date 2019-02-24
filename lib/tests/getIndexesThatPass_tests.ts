import { getIndexesThatPass } from '../privy/getIndexesThatPass';
import { arraysMatch } from '@writetome51/arrays-match';


let arr = [1, 5, 9, 13, 17, 21, 25, 29, 37, 41, 45, 49, 53, 57, 61, 65, 73, 81, 85, 89, 93];
let length = arr.length;


// Test 1
let indexes = getIndexesThatPass((value, index, arr) => {
	return (value < 50 && index % 2 === 0 && (value * 2 < arr[index * 2]));
}, arr);
if (arraysMatch(indexes, [4, 6, 10])) console.log('test 1 passed');
else console.log('test 1 failed');


// Test 1A: make sure source array hasn't been modified:
if (arr.length === 21) console.log('test 1A passed');
else console.log('test 1A failed');


// Test 2
indexes = getIndexesThatPass((value, index) => {
	return (value % 3 === 0 && index % 2 === 0);
}, arr);
if (arraysMatch(indexes, [2, 10, 20])) console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3
arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
indexes = getIndexesThatPass((value) => {
	return (value % 3 === 0);
}, arr);
if (arraysMatch(indexes, [1, 4, 7, 10, 13])) console.log('test 3 passed');
else console.log('test 3 failed');


// Test 4: If no match, should return empty array:
indexes = getIndexesThatPass((value) => (value % 6 === 0), arr);
if (arraysMatch(indexes, [])) console.log('test 4 passed');
else console.log('test 4 failed');


// Test 5: Should trigger error if first arg is not function:
let errorTriggered = false;
try {
	getIndexesThatPass({}, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 failed');


// Test 6: should trigger error if only 1 arg is passed:
errorTriggered = false;
try {
	// @ts-ignore
	getIndexesThatPass((value) => value > 5);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 failed');


// Test 7: should trigger error if second arg is not array:
errorTriggered = false;
try {
	getIndexesThatPass((value) => value > 5, {});
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 failed');


// Test 8
errorTriggered = false;
try {
	getIndexesThatPass((true), [1, 2]);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 failed');
