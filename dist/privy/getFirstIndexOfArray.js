"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_match_1 = require("@writetome51/arrays-match");
var error_if_not_array_1 = require("error-if-not-array");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
var is_array_not_array_1 = require("@writetome51/is-array-not-array");
// returns -1 if array being searched for isn't found.
// if arrayToSearchFor contains objects, this will always return -1.
function getFirstIndexOfArray(arrayToSearchFor, arrayToSearchInside) {
    error_if_not_array_1.errorIfNotArray(arrayToSearchFor);
    error_if_not_populated_array_1.errorIfNotPopulatedArray(arrayToSearchInside);
    return arrayToSearchInside.findIndex(function (value) {
        return (is_array_not_array_1.isArray(value) && arrays_match_1.arraysMatch(value, arrayToSearchFor));
    });
}
exports.getFirstIndexOfArray = getFirstIndexOfArray;
