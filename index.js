import {errorIfNotArray} from 'error-if-not-array';
import {errorIfNotInteger} from 'error-if-not-integer';
import {isArray} from '@writetome51/is-array-not-array';
import * as matchingFns from './__privy.js';


// `whichInstance` specifies which instance of `value` to search for.  By default it's the first
// instance.  You can set it to a negative number to search from the end.
// Returns -1 if `value` isn't found.

export const getIndexOf = (value, array, whichInstance = 1) => {

	let indexes = getIndexesOf(value, array, whichInstance);
	let idxsLength = indexes.length;
	if (!(idxsLength)) return -1;

	const indexToGet = (whichInstance < 0) ? 0 : (idxsLength - 1);
	return indexes[indexToGet];
}


// Returns empty array if `value` isn't found.
// If you don't need every index, set `howMany` to desired number to speed up execution.
// You can set `howMany` to negative number to search from the end (i.e., -2 gets the last
// 2 indexes of `value`).

export const getIndexesOf = (value, array, howMany = array.length) => {
	errorIfNotArray(array);
	errorIfNotInteger(howMany);
	if (!(array.length)) return [];

	let fnName = isArray(value) ?
		'getIndexesByArrayMatching' : 'getIndexesByIdenticalMatching';
	if (howMany < 0) fnName += '_fromRight';

	return matchingFns[fnName](value, array, howMany);
}
