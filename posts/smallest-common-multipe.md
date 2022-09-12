---
    title: Smallest common multiple
    excerpt: Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
---

```js
function smallestCommons(arr) {
	arr.sort(function (a, b) {
		return b - a;
	});
	const smallest = arr[1];
	const biggest = arr[0];
	let solution = biggest;

	for (let i = biggest; i >= smallest; i--) {
		if (solution % i) {
			solution += biggest;
			i = biggest;
		}
	}
	return solution;
}

smallestCommons([1, 5]); //60
```
