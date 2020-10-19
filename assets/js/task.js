'use strict';

//==============Таски на переменные:======================

// Создайте две переменные a и b. Выведите в консоль результ их умножения.

// let a = 5;
// let b = 10;

// let result = a * b;

// console.log(result);

//Создайте две переменные c и d. Выведите в консоль результат деления.

// let c = 5;
// let d = 10;

// result = c / d;

// console.log(result);

//Создайте две переменные e и f. Выведите в консоль результат сложения.

// let e = 5;
// let f = 10;

// result = e + f;

// console.log(result);

//Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль

// let num = 11;
// let booleanValue = true;
// let str = "java script";
// let num2 = "100";

// console.log(num);
// console.log(booleanValue);
// console.log(str);
// console.log(num2);

//Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --

// let num = 1;

// num = num + 11;
// num += 11;
// console.log(num);

// num = num - 1;
// num -= 1;
// console.log(num);

// num = num * 11;
// num *= 11;
// console.log(num);

// num = num / 11;
// num /= 11;
// console.log(num);

// num = num + 1;
// num++;
// console.log(num);

// num = num - 1;
// num--;
// console.log(num);

//===========================================================================



//=======================Таски на prompt:===================


//Запросить число у пользователя и возвести его в квадрат

// let value = 0;

// value = prompt("Enter your number");


// value *= value;

// console.log(value);

//Вывести среднее арифметическое двух чисел. Числа спрашивать у пользователя.

// let num = 0;
// let num2 = 0;

// num = +prompt("Enter your number");
// num2 = +prompt("Enter your number");

// let result = (num + num2) / 2;

// console.log(result);

//Перевести число минут в секунды. Число спрашивать у пользователя.

// let num = 0;

// num = prompt("Enter the number of minutes");

// let result = num * 60;

// console.log(result);

//Создайте переменные greeting со значением'Hello, ' и userName.Спросите имя пользователя и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.

// let greetings = "Hello, ";
// let userName = "";

// userName = prompt("Enter your name");

// let result = greetings + userName;

// alert(result);

//===========================================================================


//========================Таски на условия:================

//Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно', иначе выведите 'Неверно'.

// let num = 0;

// num = +prompt("Enter your number;");

// if (num === 10) {
// 	console.log("Верно");
// } else {
// 	console.log("Неверно");
// }

// Напишите две проверки.
// Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.  
// Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'
// Проверьте работу скрипта при test, равном true, false.

// let test = true;

// if (test === true) {
// 	console.log("Верно");
// } else {
// 	console.log("Неверно");
// }

// console.log(typeof test);

// let test = true;

// if (test !== true) {
// 	console.log("Верно");
// } else {
// 	console.log("Неверно");
// }

// console.log(typeof test);

// /Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн., а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер.

// let amount = 0;
// let discount = 0;

// amount = prompt("Enter your number");

// if (amount >= 500 && amount < 800) {
// 	discount = amount - (amount / 100 * 3);
// 	console.log(discount);
// } else if (amount >= 800) {
// 	discount = amount - (amount / 100 * 5);
// 	console.log(discount);
// } else {
// 	console.log(amount);
// }

//===========================================================================


//=========Таски на циклы. Каждую задачу решить всеми тремя циклами!==========================

// Вывод чисел от 25 до 0 (порядок уменьшения)

// let num = 25;

// while (num >= 0) {
// 	console.log(num);
// 	--num;
// }

// do {
// 	console.log(num);
// 	--num;
// } while (num >= 0);

// for (; num >= 0; --num) {
// 	console.log(num);
// 

//  Вывод чисел от 10 до 50, которые кратны 5

// let num = 10;

// while (num <= 50) {
// 	if (num % 5 === 0) {
// 		console.log(num);
// 	}
// 	num++;
// }

// do {
// 	if (num % 5 === 0) {
// 		console.log(num);
// 	}
// 	num++;
// } while (num <= 50);

// for (; num <= 50; num++) {
// 	if (num % 5 === 0) {
// 		console.log(num);
// 	}
// }

// Найти сумму чисел в пределах от 1 до 100.

// let num = 0;

// let i = 0;

// while (i <= 100) {
// 	num += i;
// 	console.log(num);
// 	i++;
// }

// do {
// 	num += i;
// 	console.log(num);
// 	i++;
// } while (i <= 100)

// for (; i <= 100; i++) {
// 	num += i;
// 	console.log(num);
// }

// предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

// let num = 0;

// while (num != 6 && num != null) {
// 	num = +prompt("Решите пример 2 + 2 * 2");
// 	if (num === 6) {
// 		alert("Верно!");
// 	} else {
// 		alert("Неверно, попробуй еще раз!");
// 	}
// }

//=================Таска на функции========================

// function isAdult(age) {
// 	return age >= 20;
// }

// console.log((isAdult(20)));