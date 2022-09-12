---
    title: Valid Walk
    excerpt: Given 10 minutes (1 minute per move) and n, s, e, w movements, Can we take a 10 minutes walk and end up at the starting point?
---

```js
function isValidWalk(walk) {
	const coordinates = {
	    x: 0,
	    y: 0
	}

	let minutes = 0;

	for( const direction of walk ) {
	    minutes++;
	    if( direction === 'n' ) {
		    coordinates.y++;
	    } else if( direction === 's' ) {
		    coordinates.y--;
	    } else if( direction === 'e' ) {
		    coordinates.x++;
	    } else if( direction === 'w' ){
		    coordinates.x--;
	    }
	}

	return coordinates.x === 0 && coordinates.y === 0 && minutes === 10 ? true : false;
  }

    isValidWalk(['n','s','n','s','n','s','n','s','n','s'] // True;
    isValidWalk(['n','n','n','s','n','s','n','s','n','s']) // False
```
