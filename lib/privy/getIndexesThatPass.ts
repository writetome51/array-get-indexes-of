import { errorIfNotFunction } from 'basic-data-handling/errorIfNotFunction';
import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';


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
