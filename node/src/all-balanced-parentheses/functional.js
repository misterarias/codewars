"use strict";

var head = (ar) => { return (ar !== undefined) ? ar[0] : undefined ; }
var tail = (ar) => { return (head(ar) !== undefined) ? ar.slice(1, ar.length) : undefined ; }
var rotate = (ar) => tail(ar).concat(head(ar));
var length = (ar) => { return (head(ar) === undefined) ? 0 : 1 + length(tail(ar)) ; }
var times = (i, fn) => {
  var _inner = (n) => {
    if (n>0) { fn() ; _inner(n-1)  } ;
  }
  _inner(i) ;
};

var rotations = (ar) => {
  var output = [];
  times(length(ar), () => {
    ar=rotate(ar); output.push(ar);
  });
  return output ;
};

var permutations = (ar) => {
  var perms = rotations(ar).map( x => {
    var h = head(x), t = tail(x);
    if (t.length < 1) { return [h] }
    if (t.length == 1){ return t.concat(h); }
    return permutations(t).map( (item) => item.concat(h) );
  });
  return perms;
}

module.exports = permutations;
