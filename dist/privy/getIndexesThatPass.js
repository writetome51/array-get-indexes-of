"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_if_not_function_1 = require("error-if-not-function");
const error_if_not_array_1 = require("error-if-not-array");
// Returns all indexes of array items that pass a test.
// testFunction = function(currentValue, currentIndex, theArray){ ... }
// testFunction must return boolean.
function getIndexesThatPass(testFunction, array) {
    error_if_not_function_1.errorIfNotFunction(testFunction);
    error_if_not_array_1.errorIfNotArray(array);
    let indexes = [];
    array.filter((value, index, array) => {
        if (testFunction(value, index, array)) {
            indexes.push(index);
            return true;
        }
        else
            return false;
    });
    return indexes;
}
exports.getIndexesThatPass = getIndexesThatPass;
