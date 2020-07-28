"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getIndexOfNonArray_1 = require("./getIndexOfNonArray");
// If you don't need every index, set `howMany` to desired number to speed up execution.
function getIndexesOfNonArray(value, array, howMany = 'all') {
    if (howMany === 'all')
        howMany = array.length;
    let indexes = [], index = getIndexOfNonArray_1.getIndexOfNonArray(value, array);
    while (howMany > 0 && index > -1) {
        indexes.push(index);
        // @ts-ignore
        --howMany;
        index = getIndexOfNonArray_1.getIndexOfNonArray(value, array, index + 1);
    }
    return indexes;
}
exports.getIndexesOfNonArray = getIndexesOfNonArray;
