"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_primitive_or_array_1 = require("error-if-not-primitive-or-array");
var getIndexOfPrimitive_1 = require("./getIndexOfPrimitive");
var getFirstIndexOfArray_1 = require("./getFirstIndexOfArray");
var is_array_not_array_1 = require("@writetome51/is-array-not-array");
// returns -1 if value being searched for isn't found.
// value cannot be object.
function getFirstIndexOf(value, array) {
    error_if_not_primitive_or_array_1.errorIfNotPrimitiveOrArray(value);
    if (is_array_not_array_1.isArray(value)) {
        return getFirstIndexOfArray_1.getFirstIndexOfArray(value, array);
    }
    else { // if primitive...
        return getIndexOfPrimitive_1.getIndexOfPrimitive(value, array);
    }
}
exports.getFirstIndexOf = getFirstIndexOf;
