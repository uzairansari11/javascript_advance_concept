/* A script that updates/adds new function is called polyfills. */

/* A polyfill is a piece of code which give us the flexibility to support specific features in the most of the older
version of browser.
*/

// First it checks if `.filter` is available in browser
if(typeof Array.prototype.filter !== "function") {
  // implementation goes here
  Array.prototype.filter = function(fn, thisp) {
    if (this === null) throw new TypeError;
    if (typeof fn !== "function") throw new TypeError;
    var result = [];
    for (var i = 0; i < this.length; i++) {
      if (i in this) {
        var val = this[i];
        if (fn.call(thisp, val, i, this)) {
          result.push(val);
        }
      }
    }
    return result;
  };
}

// Use of .filter
[1, 2, 3, 4, 5].filter(e => e > 3);