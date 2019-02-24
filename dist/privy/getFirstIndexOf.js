"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var error_if_not_primitive_or_array_1 = require("error-if-not-primitive-or-array");
var getIndexOfPrimitive_1 = require("./getIndexOfPrimitive");
var getFirstIndexOfArray_1 = require("./getFirstIndexOfArray");
// returns -1 if value being searched for isn't found.
// value cannot be object.
function getFirstIndexOf(value, array) {
    error_if_not_primitive_or_array_1.errorIfNotPrimitiveOrArray(value);
    if (isArray_notArray_1.isArray(value)) {
        return getFirstIndexOfArray_1.getFirstIndexOfArray(value, array);
    }
    else { // if primitive...
        return getIndexOfPrimitive_1.getIndexOfPrimitive(value, array);
    }
}
exports.getFirstIndexOf = getFirstIndexOf;
