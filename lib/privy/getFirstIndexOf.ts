import { getIndexOfNonArray } from './getIndexOfNonArray';
import { getFirstIndexOfArray } from './getFirstIndexOfArray';
import { isArray } from '@writetome51/is-array-not-array';
import { getIndexesOf } from './getIndexesOf';


// returns -1 if value isn't found.

export function getFirstIndexOf(value, array): number {

	if (isArray(value)) return getFirstIndexOfArray(value, array);
	else return getIndexOfNonArray(value, array);
}


// `whichInstance` specifies which instance of `value` to search for.  By default it's the first
// instance.  You can set it to a negative number to search from the end.
// Returns -1 if value isn't found.

export function getIndexOf(value, array, whichInstance = 1) {
	if (whichInstance === 1) return getFirstIndexOf(value, array);

	let indexes = getIndexesOf(value, array);
	if (whichInstance < 0) indexes.forEach();
}
