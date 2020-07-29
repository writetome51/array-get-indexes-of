"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getIndexesOf_1 = require("./getIndexesOf");
// `whichInstance` specifies which instance of `value` to search for.  By default it's the first
// instance.  You can set it to a negative number to search from the end.
// Returns -1 if value isn't found.
function getIndexOf(value, array, whichInstance = 1) {
    let indexes;
    let howMany = whichInstance;
    if (whichInstance < 0) {
        howMany = -(whichInstance);
        array = array.reverse();
    }
    indexes = getIndexesOf_1.getIndexesOf(value, array, howMany);
    return (indexes.length ? indexes[whichInstance - 1] : -1);
}
exports.getIndexOf = getIndexOf;
