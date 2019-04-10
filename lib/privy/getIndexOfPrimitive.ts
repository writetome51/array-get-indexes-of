import { errorIfNotInteger } from 'error-if-not-integer';
import { errorIfNotPrimitive } from 'error-if-not-primitive';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';

// According to tests, this error-checking does not slow down execution. It's not
// necessary to worry about repetitive error-checking slowing down execution
// when this function is called inside a loop.


export function getIndexOfPrimitive(primitive, array, startingPosition = 0): number {
	errorIfNotPrimitive(primitive);
	errorIfNotPopulatedArray(array);
	errorIfNotInteger(startingPosition);
	return array.indexOf(primitive, startingPosition);
}
