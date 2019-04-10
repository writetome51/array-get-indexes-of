"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_array_not_array_1 = require("@writetome51/is-array-not-array");
var error_if_not_array_1 = require("error-if-not-array");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
var arrays_match_1 = require("@writetome51/arrays-match");
// returns empty [] if arrayToSearchFor isn't found.
// if arrayToSearchFor contains objects, this will always return empty array.
function getIndexesOfArray(arrayToSearchFor, arrayToSearchInside) {
    error_if_not_array_1.errorIfNotArray(arrayToSearchFor);
    error_if_not_populated_array_1.errorIfNotPopulatedArray(arrayToSearchInside);
    var indexes = [];
    arrayToSearchInside.filter(function (value, index) {
        if (is_array_not_array_1.isArray(value) && arrays_match_1.arraysMatch(value, arrayToSearchFor)) {
            indexes.push(index);
            return true;
        }
        else
            return false;
    });
    return indexes;
}
exports.getIndexesOfArray = getIndexesOfArray;
