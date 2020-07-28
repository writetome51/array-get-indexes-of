import { errorIfNotInteger } from 'error-if-not-integer';
import { errorIfLengthIsZero } from 'error-if-length-is-zero';

// Returns -1 is `value` isn't found.
// Change `startingPosition` to get something other than the first index.
// `startingPosition` can also be negative to search from the end.

export function getIndexOfNonArray(value, array, startingPosition = 0): number {
	errorIfLengthIsZero(array);
	errorIfNotInteger(startingPosition);
	return array.indexOf(value, startingPosition);
}
