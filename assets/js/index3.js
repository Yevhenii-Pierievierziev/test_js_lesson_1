'use strict';

// function factorial(number) {
// 	if (number === 1) {
// 		return number;
// 	}

// 	return number * factorial(number - 1) // рукурсия вызывает сама себя
// 	// return 4 * 3 * 2 * 1
// }

// возведение в степень(собственная реализация)

// const pow = (num1, num2) => {
// 	if (num2 === 0) {
// 		return 1;
// 	}
// 	return num1 * pow(num1, num2 - 1);
// };
// console.log(pow(2, 8));

//Реализовать с Array, without template str

// function logPar(number) {
// 	if (number === 1) {
// 		return "()";
// 	}

// 	return `(${logPar(number - 1)})`;
// }


//реализация учителя

// function power(number, pow) {
// 	if (pow === 0) {
// 		return 1;
// 	}

// 	if (pow === 1) {
// 		return number;
// 	}
// 	const powAbs = Math.abs(pow);
// 	let result = number * power(number, powAbs - 1);

// 	if (pow > 0) {
// 		return result;
// 	} else {
// 		return 1 / result;
// 	}
// }

//вывести числа от N до N, + проверки

// function logRange(min, max) {

// 	if (min === undefined || max === undefined || min > max) {
// 		console.error('Enter a valid range');
// 		return;
// 	}

// 	console.log(min);

// 	if (min < max) {
// 		logRange(min + 1, max);
// 	}
// }

// function customFlat(array, depth = 1) {

// 	if (depth < 0) {
// 		console.error("depth must be a positive value");
// 		return;
// 	}

// 	let newArr = [];

// 	if (depth === 0) {
// 		newArr = newArr.concat(array);
// 		return array;
// 	}
// 	for (let i = 0; i < array.length; i++) {
// 		if (Array.isArray(array[i])) {
// 			// ALWAYS ARRAYS

// 			const buffer = customFlat(array[i], depth - 1);

// 			newArr = newArr.concat(buffer);

// 		} else {
// 			// ALWAYS REST
// 			newArr.push(array[i]);
// 		}
// 		return newArr;
// 	}
// }

// const symbolExample = Symbol('test1');
// const symbolExample2 = Symbol('test2');
// const symbolExample3 = Symbol('test3');

// console.log(symbolExample);
// console.log(symbolExample2);
// console.log(symbolExample3);

// const object = {
// 	test: "test",
// 	'symbolExample': symbolExample,
// 	[symbolExample2]: 325,
// };
// console.log(object);

// object[symbolExample] = 'test';

// console.log(object);

// // Spread operator

// function log(...rest) {
// 	const array = ['test', 'string', true, {}];
// 	console.log(rest);
// 	console.log(array);
// 	console.log(...array, ...rest); //spread operator
// 	// console.log();
// }

// log(1, 'test', 4, "st", 5)

// function merge(arrayA, arrayB) {

// 	return [...arrayA, ...arrayB];
// }

// const ACTIONS = {
// 	GET_DATA: Symbol('GET DATA'),
// 	GET_DATA_SUCCESS: Symbol('GET_DATA_SUCCESS'),
// };

// MAP, SET

// const map = new Map();

// map.set('key', { test: "test", age: 20 });
// map.set('key2', { test: "test", age: 20 });
// map.set('key3', { test: "test", age: 20 });
// map.set(1, 1);
// map.set("1", "testsetest");

// console.log(map);

// function logMap(map) {
// 	logMap(map);

// 	for (const array of map.entries()) {
// 		console.log(array);
// 	}
// }

// const set = new Set();

// set.add('test');
// set.add('pizza');
// set.add('pizza');

// console.log(set);

// const arrayCope = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 23, 3, 4, 5];

// console.log(getUnique(arrayCopy));

// function getUnique(arrayWithCopies) {
// 	const set = new Set(arrayWithCopies);

// 	console.log(set);

// 	return [...set];
// }