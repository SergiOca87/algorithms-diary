---
    title: Move zeroes to the end
    excerpt: Given an array of numbers, return a new array with all of the zeroes at the end.
---

```js
var moveZeros = function (arr) {
	const newArr = arr;
	const zeroes = [];

	for (const num of newArr) {
		if (num === 0) zeroes.push(num);
	}

	return [...newArr.filter((item) => item !== 0), ...zeroes];
};

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]); //[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
```
