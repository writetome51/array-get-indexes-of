import {arraysMatch} from '@writetome51/arrays-match';
import {isArray} from '@writetome51/is-array-not-array';
import {append, prepend} from '@writetome51/array-append-prepend';


export function getIndexesByIdenticalMatching(value, array, howMany) {
	for (
		var indexes = [], index = array.indexOf(value);
		howMany > 0 && index > -1;
		--howMany
	) {
		append(index, indexes);
		index = array.indexOf(value, index + 1);
	}
	return indexes;
}


export function getIndexesByIdenticalMatching_fromRight(value, array, howMany) {
	howMany = Math.abs(howMany);

	for (
		var indexes = [], index = array.lastIndexOf(value);
		howMany > 0 && index > -1;
		--howMany
	) {
		prepend(index, indexes);
		index = array.lastIndexOf(value, index - 1);
	}
	return indexes;
}


export function getIndexesByArrayMatching(arrToSearchFor, arrToSearchIn, howMany) {
	for (
		var indexes = [], i = 0, arrLength = arrToSearchIn.length;
		howMany > 0 && (i < arrLength);
		++i
	) {
		if (isArray(arrToSearchIn[i]) && arraysMatch(arrToSearchIn[i], arrToSearchFor)) {
			append(i, indexes);
			--howMany;
		}
	}
	return indexes;
}


export function getIndexesByArrayMatching_fromRight(arrToSearchFor, arrToSearchIn, howMany) {
	howMany = Math.abs(howMany);

	for (
		var indexes = [], i = arrToSearchIn.length - 1;
		howMany > 0 && (i > -1);
		--i
	) {
		if (isArray(arrToSearchIn[i]) && arraysMatch(arrToSearchIn[i], arrToSearchFor)) {
			prepend(i, indexes);
			--howMany;
		}
	}
	return indexes;
}
