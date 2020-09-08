import {arraysMatch} from '@writetome51/arrays-match';
import {isArray} from '@writetome51/is-array-not-array';


export function getIndexesOfArray(arrToSearchFor, arrToSearchIn, howMany) {
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
