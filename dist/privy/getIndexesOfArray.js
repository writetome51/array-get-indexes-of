"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_array_not_array_1 = require("@writetome51/is-array-not-array");
const error_if_length_is_zero_1 = require("error-if-length-is-zero");
const arrays_match_1 = require("@writetome51/arrays-match");
// If you don't need every index, set `howMany` to desired number to speed up execution.
function getIndexesOfArray(arrayToSearchFor, arrayToSearchInside, howMany = 'all') {
    error_if_length_is_zero_1.errorIfLengthIsZero(arrayToSearchInside);
    if (howMany === 'all')
        howMany = arrayToSearchInside.length;
    let indexes = [], i = -1;
    while (howMany > 0 && (++i < arrayToSearchInside.length)) {
        if (is_array_not_array_1.isArray(arrayToSearchInside[i]) && arrays_match_1.arraysMatch(arrayToSearchInside[i], arrayToSearchFor)) {
            indexes.push(i);
            // @ts-ignore
            --howMany;
        }
    }
    return indexes;
}
exports.getIndexesOfArray = getIndexesOfArray;
