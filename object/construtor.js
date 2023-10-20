/* constructor function */

function UserInstance(name, age, x) {
	/* const this = {} */

	this.name = name;
	this.age = age;
	this.x = x;

	/* return this */
}
const newUser = new UserInstance("UZAIR", 25, () => console.log("hello"));

// console.log(newUser);

/* 

When a function is executed with new, it does the following steps:

A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned.

*/

/* new.target for checking a constructor is called with new keyword or not */

function AdminInstance(name, age) {
	/* const this = {} */
	const result = new.target;
	if (!result) {
		return new AdminInstance(name, age);
	}
	this.name = name;
	this.age = age;

	/* return this */
}
const newAdmin = AdminInstance("UZAIR", 25);
console.log(newAdmin);

/* return from the constructor */

