/* A function that is property of an object called method */

const user = {
	sayHi: function () {
		console.log("hello");
	},
};

const user2 = {
	sayHi() {
		console.log("hello");
	},
};

// user.sayHi(), user1.sayHi();

/* this keyword for the object methods */

let newObject = {
	name: "U Z A I R - A N S A R I",
	sayHi() {
		console.log(this.name);
	},
};
// newObject.sayHi();

let user1 = {
	name: "John",
	age: 30,

	sayHi() {
		console.log(this.name); // leads to an error
	},
};

let admin = user1;

// console.log(admin === user1, "i am admin");
user1 = null; // overwrite to make things obvious

// console.log(admin);
// console.log(user1);

// admin.sayHi();

const obj1 = {
	name: "uzair",
};

const obj2 = {
	name: "Michael",
};

function sayGreeting() {
	console.log(`${this.name} is saying hello`);
}

obj1.f = sayGreeting;
obj2.f = sayGreeting;

obj1.f();
obj2.f();

/* Make a ladder */

const ladder = {
	step: 0,

	up() {
		this.step++;
	},
	down() {
		this.step--;
	},
	totalSteps() {
		console.log(this.step + " steps");
	},
};
