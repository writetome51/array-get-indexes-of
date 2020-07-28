"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getIndexOfNonArray_1 = require("./getIndexOfNonArray");
function getIndexesOfPrimitive(primitive, array) {
    var indexes = [];
    var index = getIndexOfNonArray_1.getIndexOfNonArray(primitive, array);
    while (index > -1) {
        indexes.push(index);
        index = getIndexOfNonArray_1.getIndexOfNonArray(primitive, array, index + 1);
    }
    return indexes;
}
exports.getIndexesOfPrimitive = getIndexesOfPrimitive;
