# getIndexOf(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value, array, whichInstance? = 1<br>): number

Returns index of `value` found in `array`. Returns -1 if `value` isn't found. Optional  
`whichInstance` specifies which instance of `value` to search for. By default it's the  
first instance. You can set it to a negative number to search from the end.


# getIndexesOf(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;howMany? = array.length<br>): number[]

Returns indexes of `value` in `array`.  If you don't need every index, set `howMany` to  
desired number to speed up execution.  You can set `howMany` to negative number to  
search from the end (i.e., `-2` gets the last 2 indexes of `value`).


## How an Array is found
If `value` is Array, identical matching via `===` is tried first. If there's no match,  
`value` is searched for using this algorithm:  
For each `i` in `array`:  &nbsp; if `array[i]` is Array, each item inside `array[i]` is  
checked to see if it matches the item with the same index in `value`, using the `===`  
operator.  If those two items are both Arrays, the same algorithm is recursively run on  
them.


## Examples
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10];

getIndexOf(100, arr);
// -->  -1

getIndexOf(10, arr);
// -->  9

// If 'whichInstance' is greater than num indexes available, the last available 
// index is returned.
getIndexOf(10, arr, 4);
// -->  11

// The better way to get the last index:
getIndexOf(10, arr, -1);
// -->  11

getIndexOf(10, arr, -3);
// -->  9

arr = [1, 'h', [3], 1, 'h', [3], 1, 'h', [3], 1, 'h', [3], 1];

getIndexesOf(100, arr);
// -->  []

getIndexesOf(1, arr);
// -->  [0, 3, 6, 9, 12]

// If 'howMany' is greater than num indexes available, it returns all
// indexes available:
getIndexesOf(1, arr, 8);
// -->  [0, 3, 6, 9, 12]

getIndexesOf([3], arr, 2);
// -->  [2, 5]

getIndexesOf([3], arr, -3);
// -->  [5, 8, 11]
```


## Installation
`npm i  @writetome51/array-get-indexes-of`


## Loading
```js
import {getIndexOf, getIndexesOf} from '@writetome51/array-get-indexes-of'
```
