/* syntax  */
const object1 = new Object(); // object constructor
const object2 = {}; //object literals

// console.log(object1 != object2);

const object = {
	name: "uzair",
	age: 24,
};

let key = "name";
// console.log(object.key); // undefined
// console.log(object[key]); //"uzair"
// console.log(object.hello);
/* Reason for undefined because dot notation expect directly property name  */

/* accessing the property | checking does property exist or not!*/

const object4 = { name: null, value: undefined };
// console.log(object4.value, "i am value");
// console.log("value" in object4, "i am value");

const objectSort = {
	z: "z",
	c: "c",
	a: "a",
	l: "l",
	9999: "000",
	2: "2",
	1: "1",
	3: "3",
	21: "21",
	9: "9",
};

// for (let key in objectSort) {
// 	console.log(key, objectSort[key]);
// }

/* gotcha */
let countryCode = {
	"+49": "Germany",
	"+1": "USA",
	"+91": "India",
};
/* checking the length of an object */
/* syntax */

const method1 = Object.entries("your object"); // return array of arrays that will include key and value in array [["name","uzair"],["age", 23]]
const method2 = Object.keys("your object"); // return array of keys
const method3 = Object.values("your object"); // return array of values

const newObject2 = Object.values(countryCode);
// console.log(newObject2);

const a = {};
const b = a;
b.x = "hello";
console.log(a > b);
// console.log(a, b);

// console.log(b === 5);

/* cloning an object */

const user = { hello: "message", id: 3, designation: "student" };
let x = {};
Object.assign(x, user);
x.me = "meeeee";
console.log(x, " iam x");
console.log(user, " iam user");

/* structuredClone */
