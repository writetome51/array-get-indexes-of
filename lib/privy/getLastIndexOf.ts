import { getCopy } from '@writetome51/array-get-copy';
import { getFirstIndexOf } from './getFirstIndexOf';

// returns -1 if value being searched for isn't found.
// value cannot be object.  It can be an array.

export function getLastIndexOf(value, array): number {
	let reversedCopy = getCopy(array).reverse();
	let i = getFirstIndexOf(value, reversedCopy);
	if (i === -1) return i;
	else return (reversedCopy.length - 1 - i);
}
