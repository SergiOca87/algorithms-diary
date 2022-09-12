---
    title: Array Filtering
    excerpt: Filter from an array the elements passed to a second array.
---

```js
function arrayDiff(a, b) {
    return b.length ? a.filter(( aItem ) => !b.includes( aItem )) : a;
}

arrayDiff([1,2,3], [1,2]), //[3],
```
