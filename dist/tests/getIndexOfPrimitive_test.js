"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getIndexOfPrimitive_1 = require("../privy/getIndexOfPrimitive");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10];
var errorTriggered = false;
// Test 1: error is triggered if second arg is not array:
try {
    var result_1 = getIndexOfPrimitive_1.getIndexOfPrimitive(5, undefined);
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
    var result_2 = getIndexOfPrimitive_1.getIndexOfPrimitive(5, arr, '1');
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 2: passed.');
else
    console.log('test 2: FAILED.');
// Test 3: If primitive is not found, it returns -1:
var result = getIndexOfPrimitive_1.getIndexOfPrimitive(100, arr);
if (result === -1)
    console.log('test 3: passed.');
else
    console.log('test 3: FAILED.');
// Test 4: If startingPosition is negative, it searches from end of array:
result = getIndexOfPrimitive_1.getIndexOfPrimitive(10, arr, -1);
if (result === 11)
    console.log('test 4: passed.');
else
    console.log('test 4: FAILED.');
// Test 5: if first arg is not primitive, it triggers error:
errorTriggered = false;
try {
    // @ts-ignore
    var result_3 = getIndexOfPrimitive_1.getIndexOfPrimitive([], arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5: passed.');
else
    console.log('test 5: FAILED.');
