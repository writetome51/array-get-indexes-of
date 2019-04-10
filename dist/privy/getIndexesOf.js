"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_array_not_array_1 = require("@writetome51/is-array-not-array");
var error_if_not_primitive_or_array_1 = require("error-if-not-primitive-or-array");
var getIndexesOfPrimitive_1 = require("./getIndexesOfPrimitive");
var getIndexesOfArray_1 = require("./getIndexesOfArray");
// returns an empty array if value being searched for isn't found.
// value cannot be an object.
function getIndexesOf(value, array) {
    error_if_not_primitive_or_array_1.errorIfNotPrimitiveOrArray(value);
    if (is_array_not_array_1.isArray(value)) {
        return getIndexesOfArray_1.getIndexesOfArray(value, array);
    }
    else {
        return getIndexesOfPrimitive_1.getIndexesOfPrimitive(value, array);
    }
}
exports.getIndexesOf = getIndexesOf;
