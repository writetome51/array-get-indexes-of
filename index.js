import {errorIfNotInteger} from 'error-if-not-integer';
import {getArrayCopy} from '@writetome51/get-array-copy';
import {getIndexesOfArray} from './privy/__getIndexesOfArray.js';
import {getIndexesOfNonArray} from './privy/__getIndexesOfNonArray.js';
import {getReverseIndex} from '@writetome51/get-reverse-index';
import {isArray} from '@writetome51/is-array-not-array';
import reverse from '@arr/reverse';


// `whichInstance` specifies which instance of `value` to search for.  By default it's the first
// instance.  You can set it to a negative number to search from the end.
// Returns -1 if `value` isn't found.

export function getIndexOf(value, array, whichInstance = 1) {
	errorIfNotInteger(whichInstance);
	let absoluteInstance = Math.abs(whichInstance), arrCopy = getArrayCopy(array);

	if (whichInstance < 0) reverse(arrCopy);
	let index = __getIndexOf(value, arrCopy, absoluteInstance);
	if (index === -1) return index;
	if (whichInstance < 0) index = getReverseIndex(index, arrCopy.length);

	return index;


	function __getIndexOf(value, arr, whichInstance) {
		let indexes = getIndexesOf(value, arr, whichInstance);
		let idxsLength = indexes.length;

		if (idxsLength === 0) return -1;
		return indexes[idxsLength - 1];
	}

}


// Returns empty array if `value` isn't found.
// If you don't need every index, set `howMany` to desired number to speed up execution.

export function getIndexesOf(value, array, howMany = 'all') {
	if (howMany === 'all') howMany = array.length;

	if (isArray(value)) return getIndexesOfArray(value, array, howMany);

	else return getIndexesOfNonArray(value, array, howMany);
}
