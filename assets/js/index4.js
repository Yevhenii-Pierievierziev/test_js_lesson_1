'use strict';

//==========================выравнивает вложенность массива==========================

// function ArrayMethods() {
// 	this.push = function () {
// 		for (let i = 0; i < arguments.length; i++) {
// 			this[this.length++] = arguments[i];
// 		}
// 		return this.length;
// 	};
// 	this.pop = function () {
// 		const lastIndex = this.length - 1;
// 		const lastItem = this[lastIndex];

// 		delete this[lastIndex];

// 		--this.length;

// 		return lastItem;
// 	};
// 	this.forEach = function (callback) {
// 		for (let i = 0; i < this.length; i++) {
// 			callback(this[i], i, this);
// 		}
// 	};
// 	this.concat = function (array) {
// 		let result = new MyArray();
// 		for (let i = 0; i < this.length; i++) {
// 			result.push(this[i]);
// 		}
// 		for (let i = 0; i < this.length; i++) {
// 			result.push(array[i]);
// 		}
// 		return result;
// 	};
// 	this.flat = function (depth = 1) {
// 		if (depth < 0) {
// 			console.error("depth must be a positive value");
// 			return;
// 		}
// 		let newArr = new MyArray();
// 		if (depth === 0) {
// 			return this;
// 		}
// 		for (let i = 0; i < this.length; i++) {
// 			if (Array.isArray(this[i])) {
// 				const buffer = this[i].flat(depth - 1);

// 				newArr = newArr.concat(buffer);
// 			} else if (this[i] !== undefined) {
// 				newArr.push(this[i]);
// 			}
// 		}
// 		return newArr;
// 	};
// 	//this[Symbol.iterator] = function () {  };
// }


// function MyArray() {
// 	this.length = 0;
// 	for (let i = 0; i < arguments.length; i++) {
// 		this[this.length] = arguments[i];
// 		this.length++;
// 	}
// }

// MyArray.prototype = new ArrayMethods();

// const myArr = new MyArray('test', undefined, undefined, undefined, undefined, [[[[[5]]]]]);

//=======================================================================================

//=========================try-catch=====================================================

// console.log("before");
// console.error(new Error("unkown erroe"));

// function logToFile(err) {
// 	console.dir(err);
// }

// function power(base, exp) {

// 	if (typeof base === 'string') {
// 		throw new TypeError("must be a number");
// 	}

// 	if (exp === 0) {
// 		return 1;
// 	}
// 	return base * power(base, exp - 1);
// }
// function dangerousCode() {
// 	try {
// 		console.log("TRY 1");
// 		const res = pow(2, 4);
// 		console.log("TRY 2")
// 	} catch (err) {
// 		if (err instanceof Error) {
// 			console.log("true");
// 		}
// 		if (err instanceof RangeError) {
// 			console.log("RANGE_ERROR");
// 		}
// 		if (err instanceof TypeError) {
// 			console.log("TypeError =>>>>", err);
// 		}
// 		throw err;
// 	} finally {
// 		console.log("finally");
// 	}
// }
// console.log("after danger code declaration");

// try {
// 	console.log("second try");
// 	dangerousCode();
// } catch (err) {
// 	console.log("Second catch", err);
// }

//=======================================================================================