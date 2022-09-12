---
    title: Add together
    excerpt: A function that sums two arguments together. If only one argument is provided, returns a function that expects one argument and returns the sum.
---

```js
function addTogether(...args) {
	const argumentsNum = arguments.length;
	const isNum = (arg) => typeof arg === 'number';

	if (isNum(args[0]) && isNum(args[1])) {
		return args[0] + args[1];
	} else if (argumentsNum === 1 && isNum(arguments[0])) {
		const sumTwoAnd = (num) =>
			isNum(num) ? arguments[0] + num : undefined;
		return sumTwoAnd;
	}
	return undefined;
}

addTogether(2)(3);
```
