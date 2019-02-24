"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
var arrays_match_1 = require("@writetome51/arrays-match");
// returns empty [] if arrayToSearchFor isn't found.
// if arrayToSearchFor contains objects, this will always return empty array.
function getIndexesOfArray(arrayToSearchFor, arrayToSearchInside) {
    errorIfNotArray_1.errorIfNotArray(arrayToSearchFor);
    error_if_not_populated_array_1.errorIfNotPopulatedArray(arrayToSearchInside);
    var indexes = [];
    arrayToSearchInside.filter(function (value, index) {
        if (isArray_notArray_1.isArray(value) && arrays_match_1.arraysMatch(value, arrayToSearchFor)) {
            indexes.push(index);
            return true;
        }
        else
            return false;
    });
    return indexes;
}
exports.getIndexesOfArray = getIndexesOfArray;
