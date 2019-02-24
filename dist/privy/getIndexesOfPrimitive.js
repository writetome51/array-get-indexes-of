"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getIndexOfPrimitive_1 = require("./getIndexOfPrimitive");
function getIndexesOfPrimitive(primitive, array) {
    var indexes = [];
    var index = getIndexOfPrimitive_1.getIndexOfPrimitive(primitive, array);
    while (index > -1) {
        indexes.push(index);
        index = getIndexOfPrimitive_1.getIndexOfPrimitive(primitive, array, index + 1);
    }
    return indexes;
}
exports.getIndexesOfPrimitive = getIndexesOfPrimitive;
