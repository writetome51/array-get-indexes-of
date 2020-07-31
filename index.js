import {getArrayCopy} from '@writetome51/get-array-copy';
import {getIndexesOfArray} from 'privy/__getIndexesOfArray.js';
import {getIndexesOfNonArray} from 'privy/__getIndexesOfNonArray.js';
import {getIndexForReversedArray} from '@writetome51/get-index-for-reversed-array';
import {isArray} from '@writetome51/is-array-not-array';


// `whichInstance` specifies which instance of `value` to search for.  By default it's the first
// instance.  You can set it to a negative number to search from the end.
// Returns -1 if `value` isn't found.

export function getIndexOf(value, array, whichInstance = 1) {
	let indexes, absoluteInstance = Math.abs(whichInstance), arrCopy = getArrayCopy(array);
	if (whichInstance < 0) arrCopy.reverse();

	indexes = getIndexesOf(value, arrCopy, absoluteInstance);

	if (whichInstance < 0) changeIndexesForReversedArray(indexes, arrCopy);
	return (indexes.length ? indexes[indexes.length - 1] : -1);


	function changeIndexesForReversedArray(indexes, arrCopy) {
		let i = -1;
		while (++i < indexes.length) indexes[i] = getIndexForReversedArray(indexes[i], arrCopy.length);
	}

}


// Returns empty array if `value` isn't found.
// If you don't need every index, set `howMany` to desired number to speed up execution.

export function getIndexesOf(value, array, howMany = 'all') {
	if (howMany === 'all') howMany = array.length;

	if (isArray(value)) return getIndexesOfArray(value, array, howMany);

	else return getIndexesOfNonArray(value, array, howMany);
}
