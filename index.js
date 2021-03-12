import {errorIfNotArray} from 'error-if-not-array';
import {errorIfNotInteger} from 'error-if-not-integer';
import * as matchingFns from './__privy.js';
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
// You can set `howMany` to negative number to search from the end (i.e., -2 gets indexes of
// the last 2 instances of `value`).

export function getIndexesOf(value, array, howMany = 'all') {
	errorIfNotArray(array);
	if (howMany === 'all') howMany = array.length;

	let {arrayMatchFn, identicalMatchFn} = getMatchingFnNames(howMany < 0);

	let indexes = matchingFns[identicalMatchFn](value, array, howMany);
	if (indexes.length === 0) {
		// if `value` is array, we try array matching algorithm:
		if (isArray(value)) indexes = matchingFns[arrayMatchFn](value, array, howMany);
	}
	return indexes;


	function getMatchingFnNames(searchingFromEnd) {
		let names = {
			arrayMatchFn: 'getIndexesByArrayMatching',
			identicalMatchFn: 'getIndexesByIdenticalMatching'
		};
		if (searchingFromEnd) {
			for (let i = 0, keys = Object.keys(names);  i < 2;  ++i)  names[keys[i]] += '_fromRight';
		}
		return names;
	}

}
