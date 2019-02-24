# getFirstIndexOf(value, array): number

Returns index of first instance of `value` found in `array`.  
`value` can be a primitive or array .  Returns -1 if `value` not found.


# getLastIndexOf(value, array): number

`value` can be a primitive or array.  Returns -1 if `value` not found.


# getIndexOfPrimitive(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;primitive,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingPosition? = 0<br>): number

Behaves like `Array.indexOf()`, except it does strict type-checking on `primitive`.  
Change `startingPosition` to get something other than the first index.  
startingPosition can also be negative to search from the end.  
Returns -1 if `primitive` not found.


# getIndexesOf(value, array): number[]

Returns all indexes of `value` in array.  `value` cannot be object.


# getIndexesThatPass(testFunction, array): number[]

This returns all indexes of array items that pass the `testFunction`.  
`testFunction` = function(currentValue, currentIndex?, theArray?): boolean
```
Example:

let arr = ['a', 'boy', 'is', 'playing', 'in', 'the', 'street'];

let stringsLongerThanThree = getIndexesThatPass((value) => value.length > 3,  arr);

// stringsLongerThanThree is now [3, 6]
```