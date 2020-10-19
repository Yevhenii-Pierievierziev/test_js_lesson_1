'use strict';

// const colorRed = "#f00";

// const name = "Yevhenii";

// Именование переменных A-Za-z, 0-9, $

// Нельзя использовать числа в начале и ключевые слова

// Однострочный коментарий

/*
	Многострочный коментарий
*/

// console.log(colorRed);

// console.log(name);

// let question = prompt('Как Вас зовут?');

// let string = `Меня зовут ${question}`;

// console.log(string);

// // console.log(`Меня зовут ${question}`);

// let check = false; // Boolean

// let undefinedVariable; // undefined

// console.log(typeof undefinedVariable); // Текущий тип переменной 

// let nullValue = null;

// console.log(typeof nullValue); // баг, ошибка языка

// let inputOne = prompt('Enter your number');
// let inputTwo = prompt('Enter your number2');

// inputOne = +inputOne;
// inputTwo = +inputTwo;

// let numberOne = +(inputOne); // унарный плюс вместо parseInt
// let numberTwo = +(inputTwo);

// let numberOne = Number(inputOne); // преобразовывает строку к числу
// let numberTwo = Number(inputTwo)
// let result = numberOne + numberTwo;

// console.log(result);
// console.log(isNaN(result));

// let testValue = String(50); // преобразовать число в строку
// console.log(testValue + ' strings');

// let boolValue = Boolean(1); //логический тип

// console.log(boolValue);

// let num = 5;
// let num2 = 10;

// // num = num + num2;
// num += num2;
// console.log(num);

// // num = num - num2;
// num -= num2;
// console.log(num);

// // num = num * num2;
// num *= num2;
// console.log(num);

// // num = num / num2;
// num /= num2;
// console.log(num);

// let number = 10;

// // number++;
// console.log(number++); // 10  постфиксный инкремент, добавляет +1
// // ++number;
// console.log(number); // 11
// console.log(++number); // 12 префиксный инкремент
// console.log(number); // 12

// number--; // декремент, работает аналогично
// --number; //

// let result;

// let num1 = 1;
// let num2 = 10;

// result = num1 < num2;
// // <,>, >=, <=, !==, ===

// result = num1 === num2;

// console.log(result);


// let age = 20;

// let division = 5;

// console.log(age % division); // 0

// console.log(age ** division); // 3200000

// console.log(age / 0); // infinity

// console.log(!true); // false


// УСЛОВНЫЕ ОПЕРАТОРЫ!

// if (условие === true){
// 	выражение;
// } else {        // пример условного оператора
// 	выражение;
// }

// НЕ ЗАВЕРШЕННАЯ ЗАДАЧА, ПРИ ОТМЕНЕ ВЫПОЛНЯЕТСЯ ПЕРВОЕ УСЛОВИЕ

// let input = prompt('Enter day');

// +input;

// if (input <= 10) {

// 	console.log("first part of month");

// } else if (input >= 10 && input < 20) {

// 	console.log("second part of month");

// } else if (input > 20) {

// 	console.log("thrid part");
// } else {
// 	console.log("your did not enter value");
// }

// let result = false && true; // && отрабатывает до первого лживого условия
// let result = false || true; // || отрабатывает до первого правдивого условия

// console.log(result);

// let clockTime = prompt('Enter your number');

// +clockTime;

// let result = parseInt(clockTime);

// if (clockTime >= 1 && clockTime < 15) {
// 	console.log("That's first part of hour");
// } else if (clockTime >= 16 && clockTime <= 30) {
// 	console.log("That's second part of hour");
// } else if (clockTime >= 31 && clockTime <= 45) {
// 	console.log("That's third part of hour");
// } else if (clockTime >= 46 && clockTime <= 60) {
// 	console.log("That's fourth part of hour");
// } else {
// 	console.log("Please, your digit is wrong. Try again!");
// }


//========================while=========================

// let iteration = 0;

// while (iteration <= 10) {

// 	console.log(iteration)

// 	iteration++; //прибавить счетчик на 1, без него цикл бесконечный
// }

//========================do-while=========================

// let iter = 0;

// do {
// 	console.log("wow")

// } while (iter === undefined);

//========================for=========================

// for (let i = 0; i <= 100; i++) {
// 	console.log(i);

// 	if (i > 50) {
// 		break;
// 	}

// }

//========================for=========================

// for (let i = 0; i <= 100; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 		continue; // переход к следующей итерации;
// 		break; // выход из цикла
// 	}
// }

// let value = 0;

// value = prompt("Enter your number");

// let i = 0;

// while (i < value) {  //условие выхода из цыкла
// 	console.log("#");
// 	i++;
// }

// do {
// 	console.log("#");
// 	i++;
// } while (i < value);

// for (i = 0; i < value; i++) {
// 	console.log("#");
// }

// function funcionName(param) { 
// 	// function body
//  }

// alert(' i am function'); // модальное окно у браузера



// function sayHello() {
// 	console.log("Hi");
// }

// let teste = 10;
// console.log(teste);

// sayHello(); //вызов функции

// let input = prompt("Enter your name");

// sayHiToUser(input);

// function sayHiToUser(userName, age = 18) {
// 	let it = 0;

// 	it++;
// 	it++;

// 	console.log(`Hi, ${userName}`);
// 	console.log(age);
// 	console.log(it); // 2

// 	return it + 5, age;

// 	console.log("beadgrse");
// }

// let result = sayHiToUser("vasya");
// console.log("RESULT =", result);