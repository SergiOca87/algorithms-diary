---
    title: String capitalization
    excerpt: Capitalizes string except for provided exceptions
---

```js
function titleCase(title, minorWords) {

	const titleArr = title.split(' ');
	const minorWordsArr = minorWords ? minorWords.split(' ') : undefined;

	if( minorWordsArr ) {
	    const newArr = titleArr.map((word) => {
		    if( minorWordsArr.some(minorWordsArrWord => minorWordsArrWord.toLowerCase() === word.toLowerCase()) ) {
			   return word.toLowerCase();
		    } else {
			   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		    }
	   });

	   const newStr = newArr.join(' ');
	   return newStr.charAt(0).toUpperCase() + newStr.slice(1);

	} else {
	    return titleArr.map( word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() ).join(' ');
    }
}

titleCase('THE WIND IN THE WILLOWS', 'The In'), //The Wind in the Willows
```
