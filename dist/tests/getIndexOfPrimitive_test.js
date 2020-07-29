import { getIndexOfNonArray } from '../privy/getIndexOfNonArray.js';
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10];
let errorTriggered = false;
// Test 1: error is triggered if second arg is not array:
try {
    let result = getIndexOfNonArray(5, undefined);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 1: passed.');
else
    console.log('test 1: FAILED.');
// Test 2: error is triggered if startingPosition parameter is not integer:
errorTriggered = false;
try {
    // @ts-ignore
    let result = getIndexOfNonArray(5, arr, '1');
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 2: passed.');
else
    console.log('test 2: FAILED.');
// Test 3: If primitive is not found, it returns -1:
let result = getIndexOfNonArray(100, arr);
if (result === -1)
    console.log('test 3: passed.');
else
    console.log('test 3: FAILED.');
// Test 4: If startingPosition is negative, it searches from end of array:
result = getIndexOfNonArray(10, arr, -1);
if (result === 11)
    console.log('test 4: passed.');
else
    console.log('test 4: FAILED.');
// Test 5: if first arg is not primitive, it triggers error:
errorTriggered = false;
try {
    // @ts-ignore
    let result = getIndexOfNonArray([], arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5: passed.');
else
    console.log('test 5: FAILED.');
