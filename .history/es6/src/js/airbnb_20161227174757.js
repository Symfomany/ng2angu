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

// const someStack = [];
// // bad
// someStack[someStack.length] = 'abracadabra';
// // good
// someStack.push('abracadabra');


// bad
// const len = items.length;
// const itemsCopy = [];
// let i;
// for (i = 0; i < len; i++) {
//   itemsCopy[i] = items[i];
// }
// good: seprad operator
// const itemsCopy = [...items];

// use Array.from.:  object to an array
// const foo = document.querySelectorAll('.foo');
// const nodes = Array.from(foo);

/**
 * Callback function
 */
// good
// [1, 2, 3].map((x) => {
//   const y = x + 1;
//   return x * y;
// });
// // good
// [1, 2, 3].map(x => x + 1);
// // good
// const flat = {};
// [[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
//   const flatten = memo.concat(item);
//   flat[index] = flatten;
//   return flatten;
// });
// // good
// inbox.filter((msg) => {
//   const { subject, author } = msg;
//   if (subject === 'Mockingbird') {
//     return author === 'Harper Lee';
//   }

//   return false;
// });


// use Destructuring

// function getFullName(user) {
//   const { firstName, lastName } = user;
//   return `${firstName} ${lastName}`;
// }
// best
// function getFullName({ firstName, lastName }) {
//   return `${firstName} ${lastName}`;
// }