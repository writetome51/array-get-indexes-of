"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getIndexOfNonArray_1 = require("./getIndexOfNonArray");
const getFirstIndexOfArray_1 = require("./getFirstIndexOfArray");
const is_array_not_array_1 = require("@writetome51/is-array-not-array");
const getIndexesOf_1 = require("./getIndexesOf");
// returns -1 if value isn't found.
function getFirstIndexOf(value, array) {
    if (is_array_not_array_1.isArray(value))
        return getFirstIndexOfArray_1.getFirstIndexOfArray(value, array);
    else
        return getIndexOfNonArray_1.getIndexOfNonArray(value, array);
}
exports.getFirstIndexOf = getFirstIndexOf;
// `whichInstance` specifies which instance of `value` to search for.  By default it's the first
// instance.  You can set it to a negative number to search from the end.
// Returns -1 if value isn't found.
function getIndexOf(value, array, whichInstance = 1) {
    if (whichInstance === 1)
        return getFirstIndexOf(value, array);
    let indexes = getIndexesOf_1.getIndexesOf(value, array);
    if (whichInstance < 0)
        indexes.forEach();
}
exports.getIndexOf = getIndexOf;
