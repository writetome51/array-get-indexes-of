import { isArray } from '@writetome51/is-array-not-array';
import { getIndexesOfNonArray } from './getIndexesOfNonArray';
import { getIndexesOfArray } from './getIndexesOfArray';


// Returns empty array if value being searched for isn't found.
// If you don't need every index, set `howMany` to desired number to speed up execution.

export function getIndexesOf(
	value,
	array,
	howMany: number | 'all' = 'all'
): number[] {
	if (isArray(value)) return getIndexesOfArray(value, array, howMany);

	else return getIndexesOfNonArray(value, array);
}
