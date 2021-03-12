import {errorIfNotArray} from 'error-if-not-array';
import {errorIfNotInteger} from 'error-if-not-integer';
import {
	getIndexesOfArray,
	getIndexesOfValueByArrayMatching,
	getIndexesOfValueByIdenticalMatching
} from './__privy.js';
import {isArray} from '@writetome51/is-array-not-array';


// `whichInstance` specifies which instance of `value` to search for.  By default it's the first
// instance.  You can set it to a negative number to search from the end.
// Returns -1 if `value` isn't found.

export function getIndexOf(value, array, whichInstance = 1) {
	errorIfNotInteger(whichInstance);

	let indexes = getIndexesOf(value, array, whichInstance);
	let idxsLength = indexes.length;

	return idxsLength > 0 ? indexes[idxsLength - 1] : -1;
}


// Returns empty array if `value` isn't found.
// If you don't need every index, set `howMany` to desired number to speed up execution.

export function getIndexesOf(value, array, howMany = 'all') {
	errorIfNotArray(array);
	if (howMany === 'all') howMany = array.length;

	let indexes = getIndexesOfValueByIdenticalMatching(value, array, howMany);
	if (indexes.length === 0) {
		// if `value` is array, we try one more thing:
		if (isArray(value)) indexes = getIndexesOfValueByArrayMatching(value, array, howMany);
	}
	return indexes;
}
