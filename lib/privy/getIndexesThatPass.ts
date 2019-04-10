import { errorIfNotFunction } from 'error-if-not-function';
import { errorIfNotArray } from 'error-if-not-array';


// Returns all indexes of array items that pass a test.
// testFunction = function(currentValue, currentIndex, theArray){ ... }
// testFunction must return boolean.

export function getIndexesThatPass(testFunction, array): number[] {
	errorIfNotFunction(testFunction);
	errorIfNotArray(array);
	let indexes = [];
	array.filter((value, index, array) => {
		if (testFunction(value, index, array)) {
			indexes.push(index);
			return true;
		}
		else return false;
	});
	return indexes;
}
