// Returns indexes of items that pass a test.
// `testFunction`: (currentValue, currentIndex?, theArray?) => boolean
export function getIndexesThatPass(testFunction, array) {
    let indexes = [];
    array.forEach((value, index, array) => {
        if (testFunction(value, index, array))
            indexes.push(index);
    });
    return indexes;
}
