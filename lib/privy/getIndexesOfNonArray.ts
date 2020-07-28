import { getIndexOfNonArray } from './getIndexOfNonArray';


// If you don't need every index, set `howMany` to desired number to speed up execution.

export function getIndexesOfNonArray(
	value,
	array,
	howMany: number | 'all' = 'all'
): number[] {

	if (howMany === 'all') howMany = array.length;
	let indexes = [], index = getIndexOfNonArray(value, array);

	while (howMany > 0 && index > -1) {
		indexes.push(index);
		// @ts-ignore
		--howMany;
		index = getIndexOfNonArray(value, array, index + 1);
	}
	return indexes;
}
