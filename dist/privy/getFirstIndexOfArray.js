"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_match_1 = require("@writetome51/arrays-match");
const is_array_not_array_1 = require("@writetome51/is-array-not-array");
const error_if_length_is_zero_1 = require("error-if-length-is-zero");
// returns -1 if arrayToSearchFor isn't found.
function getFirstIndexOfArray(arrayToSearchFor, arrayToSearchInside) {
    error_if_length_is_zero_1.errorIfLengthIsZero(arrayToSearchInside);
    return arrayToSearchInside.findIndex((value) => {
        return (is_array_not_array_1.isArray(value) && arrays_match_1.arraysMatch(value, arrayToSearchFor));
    });
}
exports.getFirstIndexOfArray = getFirstIndexOfArray;
