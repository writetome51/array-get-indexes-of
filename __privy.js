import {arraysMatch} from '@writetome51/arrays-match';
import {isArray} from '@writetome51/is-array-not-array';


export function getIndexesOfValueByIdenticalMatching(value, array, howMany) {
	for (
		var indexes = [], index = array.indexOf(value);
		howMany > 0 && index > -1;
		--howMany
	) {
		indexes.push(index);
		index = array.indexOf(value, index + 1);
	}
	return indexes;
}


export function getIndexesOfValueByIdenticalMatching_fromRight(value, array, howMany) {
	howMany = Math.abs(howMany);

	for (
		var indexes = [], index = array.lastIndexOf(value);
		howMany > 0 && index > -1;
		--howMany
	) {
		indexes.push(index);
		index = array.lastIndexOf(value, index - 1);
	}
	return indexes;
}


export function getIndexesOfValueByArrayMatching(arrToSearchFor, arrToSearchIn, howMany) {
	for (
		var indexes = [], i = 0, arrLength = arrToSearchIn.length;
		howMany > 0 && (i < arrLength);
		++i
	) {
		if (isArray(arrToSearchIn[i]) && arraysMatch(arrToSearchIn[i], arrToSearchFor)) {
			indexes.push(i);
			--howMany;
		}
	}
	return indexes;
}


export function getIndexesOfValueByArrayMatching_fromRight(arrToSearchFor, arrToSearchIn, howMany) {
	howMany = Math.abs(howMany);

	for (
		var indexes = [], i = arrToSearchIn.length - 1;
		howMany > 0 && (i > -1);
		--i
	) {
		if (isArray(arrToSearchIn[i]) && arraysMatch(arrToSearchIn[i], arrToSearchFor)) {
			indexes.push(i);
			--howMany;
		}
	}
	return indexes;
}
