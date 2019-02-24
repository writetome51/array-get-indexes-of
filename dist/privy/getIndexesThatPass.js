"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotFunction_1 = require("basic-data-handling/errorIfNotFunction");
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
// Returns all indexes of array items that pass a test.
// testFunction = function(currentValue, currentIndex, theArray){ ... }
// testFunction must return boolean.
function getIndexesThatPass(testFunction, array) {
    errorIfNotFunction_1.errorIfNotFunction(testFunction);
    errorIfNotArray_1.errorIfNotArray(array);
    var indexes = [];
    array.filter(function (value, index, array) {
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
