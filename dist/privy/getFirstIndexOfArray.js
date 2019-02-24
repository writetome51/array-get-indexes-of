"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
var arrays_match_1 = require("@writetome51/arrays-match");
// returns -1 if array being searched for isn't found.
// if arrayToSearchFor contains objects, this will always return -1.
function getFirstIndexOfArray(arrayToSearchFor, arrayToSearchInside) {
    errorIfNotArray_1.errorIfNotArray(arrayToSearchFor);
    error_if_not_populated_array_1.errorIfNotPopulatedArray(arrayToSearchInside);
    return arrayToSearchInside.findIndex(function (value) {
        return (isArray_notArray_1.isArray(value) && arrays_match_1.arraysMatch(value, arrayToSearchFor));
    });
}
exports.getFirstIndexOfArray = getFirstIndexOfArray;
