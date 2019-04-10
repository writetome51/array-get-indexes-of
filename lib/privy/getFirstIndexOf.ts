import { errorIfNotPrimitiveOrArray } from 'error-if-not-primitive-or-array';
import { getIndexOfPrimitive } from './getIndexOfPrimitive';
import { getFirstIndexOfArray } from './getFirstIndexOfArray';
import { isArray } from '@writetome51/is-array-not-array';


// returns -1 if value being searched for isn't found.
// value cannot be object.

export function getFirstIndexOf(value, array): number {
	errorIfNotPrimitiveOrArray(value);
	if (isArray(value)) {
		return getFirstIndexOfArray(value, array);
	}
	else { // if primitive...
		return getIndexOfPrimitive(value, array);
	}
}
