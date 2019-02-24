import { getIndexOfPrimitive } from './getIndexOfPrimitive';


export function getIndexesOfPrimitive(primitive, array): number[] {
	let indexes = [];
	let index = getIndexOfPrimitive(primitive, array);
	while (index > -1) {
		indexes.push(index);
		index = getIndexOfPrimitive(primitive, array, index + 1);
	}
	return indexes;
}
