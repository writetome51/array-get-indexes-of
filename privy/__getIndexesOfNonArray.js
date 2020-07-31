import {getIndexOfNonArray} from './__getIndexOfNonArray.js';


export function getIndexesOfNonArray(value, array, howMany) {
	let indexes = [], index = getIndexOfNonArray(value, array);

	while (howMany > 0 && index > -1) {
		indexes.push(index);
		--howMany;
		index = getIndexOfNonArray(value, array, index + 1);
	}
	return indexes;
}
