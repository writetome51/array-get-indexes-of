export function getIndexesOfNonArray(value, array, howMany) {
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
