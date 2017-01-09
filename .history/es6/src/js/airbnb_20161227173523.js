const foo = 1;
let bar = foo;
var b = bar;


bar = 9;
b = 10;

console.log(foo, bar, b); // => 1, 9