import { arraysMatch } from '@writetome51/arrays-match';
import { isArray } from '@writetome51/is-array-not-array';
import { errorIfLengthIsZero } from 'error-if-length-is-zero';


// returns -1 if arrayToSearchFor isn't found.

export function getFirstIndexOfArray(arrayToSearchFor, arrayToSearchInside): number {

	errorIfLengthIsZero(arrayToSearchInside);

	return arrayToSearchInside.findIndex((value) => {
		return (isArray(value) && arraysMatch(value, arrayToSearchFor));
	});
}
