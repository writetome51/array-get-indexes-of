import { isEmpty } from 'basic-data-handling/isEmpty_notEmpty';
import { getIndexesOf } from './getIndexesOf';

// returns -1 if value being searched for isn't found.
// value cannot be object.

export function getLastIndexOf(value, array): number {
	let indexes = getIndexesOf(value, array);
	if (isEmpty(indexes)) return -1;
	else return indexes[indexes.length - 1];
}
