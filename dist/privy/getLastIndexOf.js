"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_copy_1 = require("@writetome51/array-get-copy");
var getFirstIndexOf_1 = require("./getFirstIndexOf");
// returns -1 if value being searched for isn't found.
// value cannot be object.  It can be an array.
function getLastIndexOf(value, array) {
    var reversedCopy = array_get_copy_1.getCopy(array).reverse();
    var i = getFirstIndexOf_1.getFirstIndexOf(value, reversedCopy);
    if (i === -1)
        return i;
    else
        return (reversedCopy.length - 1 - i);
}
exports.getLastIndexOf = getLastIndexOf;
