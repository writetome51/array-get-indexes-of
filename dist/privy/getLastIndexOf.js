"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
var getIndexesOf_1 = require("./getIndexesOf");
// returns -1 if value being searched for isn't found.
// value cannot be object.
function getLastIndexOf(value, array) {
    var indexes = getIndexesOf_1.getIndexesOf(value, array);
    if (isEmpty_notEmpty_1.isEmpty(indexes))
        return -1;
    else
        return indexes[indexes.length - 1];
}
exports.getLastIndexOf = getLastIndexOf;
