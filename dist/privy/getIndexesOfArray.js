import { arraysMatch } from '@writetome51/arrays-match';
import { errorIfLengthIsZero } from 'error-if-length-is-zero';
import { isArray } from '@writetome51/is-array-not-array';
// If you don't need every index, set `howMany` to desired number to speed up execution.
// Example: if howMany === 2, it returns the first 2 found indexes.
export function getIndexesOfArray(arrayToSearchFor, arrayToSearchIn, howMany = 'all') {
    errorIfLengthIsZero(arrayToSearchIn);
    if (howMany === 'all')
        howMany = arrayToSearchIn.length;
    let indexes = [], i = -1;
    while (howMany > 0 && (++i < arrayToSearchIn.length)) {
        if (isArray(arrayToSearchIn[i]) && arraysMatch(arrayToSearchIn[i], arrayToSearchFor)) {
            indexes.push(i);
            // @ts-ignore
            --howMany;
        }
    }
    return indexes;
}
