/**
 * Primitives
 */
// const foo = 1;
// let bar = foo;
// bar = 9;

// console.log(foo, bar); // => 1, 9

/**
 * Complex
 */
// const foo = [1, 2];
// const bar = foo;
// bar[0] = 9;
// console.log(foo[0], bar[0]); // => 9, 9

// bad
// var a = 1;
// var b = 2;
// good
// const a = 1;
// const b = 2;

// bad
// const item = new Object();
// // good
// const item = {};

// good, use the let.
// let count = 1;
// if (true) {
//   count += 1;
// }

// bad
// const items = new Array();
// // good
// const items = [];