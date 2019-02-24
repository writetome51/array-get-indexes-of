import { getIndexesOfArray } from '../privy/getIndexesOfArray';
import { arraysMatch } from '@writetome51/arrays-match';


let arr: any[] = [1, 2, 3, 4, [[1], [2]], 5, 6, 7, 8, 9, [[1], [2]]];

// Test 1
let indexes = getIndexesOfArray([[1], [2]], arr);
if (arraysMatch(indexes, [4, 10])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2
arr = [1, 2, 3, 4, [['he'], ['llo']], 5, 6, 7, 8, 9, [['he'], ['llo']]];
indexes = getIndexesOfArray([['he'], ['llo']], arr);
if (arraysMatch(indexes, [4, 10])) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3
arr = [1, 2, 3, 4, [[true], [false]], 5, 6, 7, 8, 9, [[true], [false]]];
indexes = getIndexesOfArray([[true], [false]], arr);
if (arraysMatch(indexes, [4, 10])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4
arr = [1, 2, 3, 4, [1.033, [1.044, 2.567, [1.2, 2.3]]], 5, 6, 7, 8, 9, [1.033, [1.044, 2.567, [1.2, 2.3]]]];
indexes = getIndexesOfArray([1.033, [1.044, 2.567, [1.2, 2.3]]], arr);
if (arraysMatch(indexes, [4, 10])) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5
arr = [1, 2, 3, 4, [], 5, 6, 7, 8, 9, []];
indexes = getIndexesOfArray([], arr);
if (arraysMatch(indexes, [4, 10])) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6: Error should trigger if second arg is not array:
let errorTriggered = false;
try {
	getIndexesOfArray([], {});
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7: Error should trigger if second arg is empty array:
errorTriggered = false;
try {
	getIndexesOfArray([], []);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8: Error should trigger if first arg is not array:
errorTriggered = false;
try {
	getIndexesOfArray({prop: 1}, [1, 2, 3, 4]);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');