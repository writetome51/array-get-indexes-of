import {arraysMatch} from '@writetome51/arrays-match';
import {errorIfLengthIsZero} from 'error-if-length-is-zero';
import {isArray} from '@writetome51/is-array-not-array';


export function getIndexesOfArray(arrayToSearchFor, arrayToSearchIn, howMany) {
	errorIfLengthIsZero(arrayToSearchIn);

	let indexes = [], i = -1, arrLength = arrayToSearchIn.length;
	while (howMany > 0 && (++i < arrLength)) {

		if (isArray(arrayToSearchIn[i]) && arraysMatch(arrayToSearchIn[i], arrayToSearchFor)) {
			indexes.push(i);
			--howMany;
		}
	}
	return indexes;
}
