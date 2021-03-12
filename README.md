# getIndexOf(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value, array, whichInstance? = 1<br>): number

Returns index of `value` found in `array`.  Returns -1 if `value` isn't found.  
Optional `whichInstance` specifies which instance of `value` to search for.  By  
default it's the first instance.  You can set it to a negative number to  
search from the end.  

## How an Array is found
If `value` is Array, identical matching via `===` is tried first. If there's no match,  
`value` is searched for using this algorithm:  
For each `i` in `array`:  if `array[i]` is Array, each item inside `array[i]` is checked  
to see if it matches the item with the same index in `value`, using the `===`  
operator.  If those two items are both Arrays, the same algorithm is recursively  
run.


# getIndexesOf(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;howMany?: number | 'all' = 'all'<br>): number[]

Returns indexes of `value` in `array`.  If you don't need every index, set  
`howMany` to desired number to speed up execution.


## Installation
`npm i  @writetome51/array-get-indexes-of`


## Loading
```js
import {getIndexOf, getIndexesOf} from '@writetome51/array-get-indexes-of'
```
