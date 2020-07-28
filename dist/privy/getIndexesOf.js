"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_array_not_array_1 = require("@writetome51/is-array-not-array");
const getIndexesOfNonArray_1 = require("./getIndexesOfNonArray");
const getIndexesOfArray_1 = require("./getIndexesOfArray");
// Returns empty array if value being searched for isn't found.
// If you don't need every index, set `howMany` to desired number to speed up execution.
function getIndexesOf(value, array, howMany = 'all') {
    if (is_array_not_array_1.isArray(value))
        return getIndexesOfArray_1.getIndexesOfArray(value, array, howMany);
    else
        return getIndexesOfNonArray_1.getIndexesOfNonArray(value, array);
}
exports.getIndexesOf = getIndexesOf;
