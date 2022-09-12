---
    title: Translate Binary
    excerpt: Translate the pased in binary code into actual text.
---

```js
function binaryAgent(str) {
	const splitMessage = str.split(' ');
	const result = [];

	for (let chunk of splitMessage) {
		result.push(parseInt(chunk, 2));
	}

	return result.map((char) => String.fromCharCode(char)).join('');
}

binaryAgent(
	'01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
); // "Aren't bonfires fun!?"
```
