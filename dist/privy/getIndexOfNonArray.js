"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_if_not_integer_1 = require("error-if-not-integer");
const error_if_length_is_zero_1 = require("error-if-length-is-zero");
// Returns -1 is `value` isn't found.
// Change `startingPosition` to get something other than the first index.
// `startingPosition` can also be negative to search from the end.
function getIndexOfNonArray(value, array, startingPosition = 0) {
    error_if_length_is_zero_1.errorIfLengthIsZero(array);
    error_if_not_integer_1.errorIfNotInteger(startingPosition);
    return array.indexOf(value, startingPosition);
}
exports.getIndexOfNonArray = getIndexOfNonArray;
