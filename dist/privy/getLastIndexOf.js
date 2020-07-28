"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_array_copy_1 = require("@writetome51/get-array-copy");
const getFirstIndexOf_1 = require("./getFirstIndexOf");
// returns -1 if value being searched for isn't found.
// value cannot be object.  It can be an array.
function getLastIndexOf(value, array) {
    let reversedCopy = get_array_copy_1.getArrayCopy(array).reverse();
    let i = getFirstIndexOf_1.getFirstIndexOf(value, reversedCopy);
    if (i === -1)
        return i;
    else
        return (reversedCopy.length - 1 - i);
}
exports.getLastIndexOf = getLastIndexOf;
