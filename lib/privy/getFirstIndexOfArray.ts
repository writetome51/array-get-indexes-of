import { arraysMatch } from '@writetome51/arrays-match';
import { errorIfNotArray } from 'error-if-not-array';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';
import { isArray } from '@writetome51/is-array-not-array';


// returns -1 if array being searched for isn't found.
// if arrayToSearchFor contains objects, this will always return -1.

export function getFirstIndexOfArray(arrayToSearchFor, arrayToSearchInside): number {
	errorIfNotArray(arrayToSearchFor);
	errorIfNotPopulatedArray(arrayToSearchInside);
	return arrayToSearchInside.findIndex((value) => {
		return (isArray(value) && arraysMatch(value, arrayToSearchFor));
	});
}
