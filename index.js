import {errorIfNotInteger} from 'error-if-not-integer';
import {getArrayCopy} from '@writetome51/get-array-copy';
import {getIndexesOfArray} from './privy/__getIndexesOfArray.js';
import {getIndexesOfNonArray} from './privy/__getIndexesOfNonArray.js';
import {getIndexForReversedArray} from '@writetome51/get-index-for-reversed-array';
import {isArray} from '@writetome51/is-array-not-array';


// `whichInstance` specifies which instance of `value` to search for.  By default it's the first
// instance.  You can set it to a negative number to search from the end.
// Returns -1 if `value` isn't found.

export function getIndexOf(value, array, whichInstance = 1) {
	errorIfNotInteger(whichInstance);
	let absoluteInstance = Math.abs(whichInstance), arrCopy = getArrayCopy(array);

	if (whichInstance < 0) arrCopy.reverse();
	let indexes = getIndexesOf(value, arrCopy, absoluteInstance);
	if (indexes.length === 0) return -1;
	
	let index = indexes[indexes.length - 1];
	if (whichInstance < 0) index = getIndexForReversedArray(index, arrCopy.length);
	return index;
}


// Returns empty array if `value` isn't found.
// If you don't need every index, set `howMany` to desired number to speed up execution.

export function getIndexesOf(value, array, howMany = 'all') {
	if (howMany === 'all') howMany = array.length;

	if (isArray(value)) return getIndexesOfArray(value, array, howMany);

	else return getIndexesOfNonArray(value, array, howMany);
}
