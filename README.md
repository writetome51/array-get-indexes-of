# getIndexOf(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value, array, whichInstance? = 1<br>): number

Returns index of `value` found in `array`.  Returns -1 if `value` isn't found.  
Optional `whichInstance` specifies which instance of `value` to search for.  By  
default it's the first instance.  You can set it to a negative number to  
search from the end.  

## How an Array is found
(If `value` is Array, a match is not found via `value === array[i]`.  Instead, if  
`array[i]` is Array, each item inside it is checked to see if it matches the item  
with the same index in `value`, using the `===` operator.  If those two items are  
both Arrays, the same algorithm is recursively run.


# getIndexesOf(value, array): number[]

Returns all indexes of `value` in `array`.  

```
Example:

let arr = ['a', 'boy', 'is', 'playing', 'in', 'the', 'street'];

let stringsLongerThanThree = getIndexesThatPass((value) => value.length > 3,  arr);
// stringsLongerThanThree === [3, 6]
```

## Installation
`npm i  @writetome51/array-get-indexes`


## Loading
```js
import {getFirstIndexOf, getLastIndexOf, getIndexOfNonArray, getIndexesOf, getIndexesThatPass} 
    from '@writetome51/array-get-indexes'
```
