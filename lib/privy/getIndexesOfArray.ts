import { isArray } from '@writetome51/is-array-not-array';
import { errorIfLengthIsZero } from 'error-if-length-is-zero';
import { arraysMatch } from '@writetome51/arrays-match';

// If you don't need every index, set `howMany` to desired number to speed up execution.

export function getIndexesOfArray(
	arrayToSearchFor,
	arrayToSearchInside,
	howMany: number | 'all' = 'all'
): number[] {

	errorIfLengthIsZero(arrayToSearchInside);
	if (howMany === 'all') howMany = arrayToSearchInside.length;

	let indexes = [], i = -1;
	while (howMany > 0 && (++i < arrayToSearchInside.length)) {
		if (isArray(arrayToSearchInside[i]) && arraysMatch(arrayToSearchInside[i], arrayToSearchFor)
		) {
			indexes.push(i);
			// @ts-ignore
			--howMany;
		}
	}
	return indexes;
}
