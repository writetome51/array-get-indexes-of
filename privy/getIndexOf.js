import {getIndexesOf} from './getIndexesOf.js';


// `whichInstance` specifies which instance of `value` to search for.  By default it's the first
// instance.  You can set it to a negative number to search from the end.
// Returns -1 if value isn't found.

export function getIndexOf(value, array, whichInstance = 1) {
	let indexes;
	if (whichInstance < 0) {
		whichInstance = -(whichInstance);
		array = array.reverse();
	}
	indexes = getIndexesOf(value, array, whichInstance);
	return (indexes.length ? indexes[indexes.length - 1] : -1);
}
