"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_integer_1 = require("error-if-not-integer");
var error_if_length_is_zero_1 = require("error-if-length-is-zero");
// According to tests, this error-checking does not slow down execution. It's not
// necessary to worry about repetitive error-checking slowing down execution
// when this function is called inside a loop.
function getIndexOfPrimitive(primitive, array, startingPosition) {
    if (startingPosition === void 0) { startingPosition = 0; }
    error_if_length_is_zero_1.errorIfLengthIsZero(array);
    error_if_not_integer_1.errorIfNotInteger(startingPosition);
    return array.indexOf(primitive, startingPosition);
}
exports.getIndexOfPrimitive = getIndexOfPrimitive;
