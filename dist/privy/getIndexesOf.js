"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var error_if_not_primitive_or_array_1 = require("error-if-not-primitive-or-array");
var getIndexesOfPrimitive_1 = require("./getIndexesOfPrimitive");
var getIndexesOfArray_1 = require("./getIndexesOfArray");
// returns an empty array if value being searched for isn't found.
// value cannot be an object.
function getIndexesOf(value, array) {
    error_if_not_primitive_or_array_1.errorIfNotPrimitiveOrArray(value);
    if (isArray_notArray_1.isArray(value)) {
        return getIndexesOfArray_1.getIndexesOfArray(value, array);
    }
    else {
        return getIndexesOfPrimitive_1.getIndexesOfPrimitive(value, array);
    }
}
exports.getIndexesOf = getIndexesOf;
