# getIndexOf(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value, array, whichInstance? = 1<br>): number

Returns index of `value` found in `array`.  Returns -1 if `value` isn't found.  
Optional `whichInstance` specifies which instance of `value` to search for.  By  
default it's the first instance.  You can set it to a negative number to  
search from the end.  

## How an Array is found
(If `value` is Array and `array[i]` is Array, each item inside `array[i]` is checked to  
see if it matches the item with the same index in `value`, using the `===`  
operator.  If those two items are both Arrays, the same algorithm is recursively  
run.


# getIndexesOf(value, array): number[]

Returns all indexes of `value` in `array`.  


## Installation
`npm i  @writetome51/array-get-indexes-of`


## Loading
```js
import {getIndexOf, getIndexesOf} from '@writetome51/array-get-indexes-of'
```
