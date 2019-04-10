import { isArray } from '@writetome51/is-array-not-array';
import { errorIfNotPrimitiveOrArray } from 'error-if-not-primitive-or-array';
import { getIndexesOfPrimitive } from './getIndexesOfPrimitive';
import { getIndexesOfArray } from './getIndexesOfArray';


// returns an empty array if value being searched for isn't found.
// value cannot be an object.

export function getIndexesOf(value, array): number[] {
	errorIfNotPrimitiveOrArray(value);
	if (isArray(value)) {
		return getIndexesOfArray(value, array);
	}
	else {
		return getIndexesOfPrimitive(value, array);
	}
}
