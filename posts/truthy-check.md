---
    title: Truthy check
    excerpt: Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
---

```js
function truthCheck(collection, pre) {
	const isTruthy = (currentValue) => pre in currentValue && currentValue[pre];
	return collection.every(isTruthy);
}

truthCheck(
	[
		{ user: 'Tinky-Winky', sex: 'male' },
		{ user: 'Dipsy', sex: 'male' },
		{ user: 'Laa-Laa', sex: 'female' },
		{ user: 'Po', sex: 'female' },
	],
	'sex'
);

//Even more concise
function truthCheck(collection, pre) {
	return collection.every((el) => el[pre]);
}

truthCheck(
	[
		{ user: 'Tinky-Winky', sex: 'male' },
		{ user: 'Dipsy', sex: 'male' },
		{ user: 'Laa-Laa', sex: 'female' },
		{ user: 'Po', sex: 'female' },
	],
	'sex'
);

//Another solution with a loop
function truthCheck(collection, pre) {
	let result;

	for (let i = 0; i < collection.length; i++) {
		if (pre in collection[i] && collection[i][pre]) {
			result = true;
		} else {
			result = false;
			break;
		}
	}

	return result;
}

truthCheck(
	[
		{ user: 'Tinky-Winky', sex: 'male' },
		{ user: 'Dipsy', sex: 'male' },
		{ user: 'Laa-Laa', sex: 'female' },
		{ user: 'Po', sex: 'female' },
	],
	'sex'
);
```
