import { isArray } from '@writetome51/is-array-not-array';
import { errorIfNotArray } from 'error-if-not-array';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';
import { arraysMatch } from '@writetome51/arrays-match';


// returns empty [] if arrayToSearchFor isn't found.
// if arrayToSearchFor contains objects, this will always return empty array.

export function getIndexesOfArray(arrayToSearchFor, arrayToSearchInside): number[] {
	errorIfNotArray(arrayToSearchFor);
	errorIfNotPopulatedArray(arrayToSearchInside);
	let indexes = [];

	arrayToSearchInside.filter((value, index) => {
		if (isArray(value) && arraysMatch(value, arrayToSearchFor)) {
			indexes.push(index);
			return true;
		}
		else return false;
	});
	return indexes;
}
