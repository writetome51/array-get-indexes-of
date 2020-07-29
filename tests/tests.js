import { getIndexesOf } from '../privy/getIndexesOf.js';
import { arraysMatch } from '@writetome51/arrays-match';
let arr = [1, 'h', [3], 1, 'h', [3], 1, 'h', [3], 1, 'h', [3], 1, 'h', [3]];
// Test 1
let indexes = getIndexesOf(1, arr);
if (arraysMatch(indexes, [0, 3, 6, 9, 12]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2
indexes = getIndexesOf('h', arr);
if (arraysMatch(indexes, [1, 4, 7, 10, 13]))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3
indexes = getIndexesOf([3], arr);
if (arraysMatch(indexes, [2, 5, 8, 11, 14]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4: If value not found, should return empty array:
indexes = getIndexesOf(100, arr);
if (arraysMatch(indexes, []))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5: Should trigger error if first arg is object:
let errorTriggered = false;
try {
    getIndexesOf({}, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6: should trigger error if only 1 arg is passed:
errorTriggered = false;
try {
    // @ts-ignore
    getIndexesOf(arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7: should trigger error if second arg is object:
errorTriggered = false;
try {
    getIndexesOf(arr, {});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Test 8
errorTriggered = false;
try {
    getIndexesOf(false, '');
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
// Test 9
let lastIndex = getLastIndexOf(1, arr);
if (lastIndex === 12)
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
// Test 10
lastIndex = getLastIndexOf('h', arr);
if (lastIndex === 13)
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
// Test 11
lastIndex = getLastIndexOf([3], arr);
if (lastIndex === 14)
    console.log('test 11 passed');
else
    console.log('test 11 FAILED');
// Test 12: should return -1 if value not found:
lastIndex = getLastIndexOf(100, arr);
if (lastIndex === -1)
    console.log('test 12 passed');
else
    console.log('test 12 FAILED');
// Test 13: should trigger error if first arg is object:
errorTriggered = false;
try {
    getLastIndexOf({}, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 13 passed');
else
    console.log('test 13 FAILED');
// Test 14: should trigger error if second arg is object:
errorTriggered = false;
try {
    getLastIndexOf(0, { prop1: 0 });
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 14 passed');
else
    console.log('test 14 FAILED');
