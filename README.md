# getIndexOf(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value, array, whichInstance? = 1<br>): number

Returns index of `value` found in `array`.  
Returns -1 if `value` isn't found.  
Optional `whichInstance` specifies which instance of `value` to search for.  
By default it's set to the first instance.  You can set it to a negative number to  
search from the end.  
(If `value` is array, a match is found by executingloop executes to see if each item  in `array[i]` is
 identical to each item in `value`, and  
if true, it's a match)


# getIndexesOf(value, array): number[]

Returns all indexes of `value` in `array`.  


# getIndexesThatPass(testFunction, array): number[]

Returns all indexes of items that pass the `testFunction`.  
`testFunction = function(currentValue, currentIndex?, theArray?): boolean`
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
