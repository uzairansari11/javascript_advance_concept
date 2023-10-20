/* symbol */
const id1 = Symbol("id");
const id2 = Symbol("id");
// console.log(id1 === id2);

/*
most of the values in js implicitly converted to string . 
symbols are special they don't convert to strings implicit.
*/

/* 
     get label from symbol variable.description
*/
// console.log(typeof id1.description); //string
// console.log(id2.description === id1.description); //true

const user = { name: "cat" };
let id = Symbol("id");
user[id] = 1;
// console.log(user);
// console.log(user["Symbol(id)"]);

/* symbol are skipped in for in loop.. */
const userId = Symbol("id");
const newObject = {
	name: "Uzair Ansari",
	age: 21,
	[userId]: 1,
};

// for (let key in newObject) {
// 	console.log(key);
// }

console.log(Object.entries(newObject));
