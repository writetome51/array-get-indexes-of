"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var errorIfNotPrimitive_1 = require("basic-data-handling/errorIfNotPrimitive");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
// According to tests, this error-checking does not slow down execution. It's not
// necessary to worry about repetitive error-checking slowing down execution
// when this function is called inside a loop.
function getIndexOfPrimitive(primitive, array, startingPosition) {
    if (startingPosition === void 0) { startingPosition = 0; }
    errorIfNotPrimitive_1.errorIfNotPrimitive(primitive);
    error_if_not_populated_array_1.errorIfNotPopulatedArray(array);
    errorIfNotInteger_1.errorIfNotInteger(startingPosition);
    return array.indexOf(primitive, startingPosition);
}
exports.getIndexOfPrimitive = getIndexOfPrimitive;
