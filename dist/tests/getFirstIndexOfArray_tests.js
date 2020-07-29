import { getFirstIndexOfArray } from '../privy/getFirstIndexOfArray';
let arr = [1, 2, 3, 4, [[1], [2]], 5, 6, 7, 8, 9, [[1], [2]]];
// Test 1
let index = getFirstIndexOfArray([[1], [2]], arr);
if (index === 4)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2
arr = [1, 2, 3, 4, [['he'], ['llo']], 5, 6, 7, 8, 9, [['he'], ['llo']]];
index = getFirstIndexOfArray([['he'], ['llo']], arr);
if (index === 4)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3
arr = [1, 2, 3, 4, [[true], [false]], 5, 6, 7, 8, 9, [[true], [false]]];
index = getFirstIndexOfArray([[true], [false]], arr);
if (index === 4)
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4
arr = [1, 2, 3, 4, [1.033, [1.044, 2.567, [1.2, 2.3]]], 5, 6, 7, 8, 9, [1.033, [1.044, 2.567, [1.2, 2.3]]]];
index = getFirstIndexOfArray([1.033, [1.044, 2.567, [1.2, 2.3]]], arr);
if (index === 4)
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5
arr = [1, 2, 3, 4, [], 5, 6, 7, 8, 9, []];
index = getFirstIndexOfArray([], arr);
if (index === 4)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6: Error should trigger if second arg is not array:
let errorTriggered = false;
try {
    getFirstIndexOfArray([], {});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7: Error should trigger if second arg is empty array:
errorTriggered = false;
try {
    getFirstIndexOfArray([], []);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Test 8: Error should trigger if first arg is not array:
errorTriggered = false;
try {
    getFirstIndexOfArray({ prop: 1 }, [1, 2, 3, 4]);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
