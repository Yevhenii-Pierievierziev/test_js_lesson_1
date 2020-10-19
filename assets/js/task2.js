'use strict';

//===============Таски на условие=======================================

//Делится ли число на 5, или на 3, или на 2 без остатка?

// let num = 0;

// num = prompt("Enter your number");

// if (num % 5 === 0) {
// 	console.log("Это число целочисленно делится на 5");
// }
// if (num % 3 === 0) {
// 	console.log("Это число целочисленно делится на 3");
// }
// if (num % 2 === 0) {
// 	console.log("Это число целочисленно делится на 2");
// }

//=========================================================================

// const isEven1 = function (number) {
// 	return number % 5 === 0;
// };

// const isEven2 = function (number) {
// 	return number % 3 === 0;
// };

// const isEven3 = function (number) {
// 	return number % 2 === 0;
// };

// let num = 2;

// const test1Func = isEven1;
// const test2Func = isEven2;
// const test3Func = isEven3;

// console.log(test1Func(num));
// console.log(test2Func(num));
// console.log(test3Func(num));



//===============Таски на switch - ДЗ====================================

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

// let num = 0;

// num = +prompt("Enter your value");

// switch (num) {
// 	case 1:
// 		console.log("весна");
// 		break;
// 	case 2:
// 		console.log("лето");
// 		break;
// 	case 3:
// 		console.log("осень");
// 		break;
// 	case 4:
// 		console.log("зима");
// 		break;
// }

// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// let month = 0;

// month = +prompt("Enter value from 1 to 12");

// switch (month) {
// 	case 12:
// 	case 1:
// 	case 2:
// 		console.log("Зима");
// 		break;
// 	case 3:
// 	case 4:
// 	case 5:
// 		console.log("Весна");
// 		break;
// 	case 6:
// 	case 7:
// 	case 8:
// 		console.log("Лето");
// 		break;
// 	case 9:
// 	case 10:
// 	case 11:
// 		console.log("Осень");
// 		break;
// }

// Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если пользователь вводит 7 -  выводится сообщение "воскресенье"). предусмотреть ошибку введения (default)

// let week = 0;

// week = +prompt("Enter your a day of week");

// switch (week) {
// 	case 1:
// 		console.log("Понедельник");
// 		break;
// 	case 2:
// 		console.log("Вторник");
// 		break;
// 	case 3:
// 		console.log("Среда");
// 		break;
// 	case 4:
// 		console.log("Четверг");
// 		break;
// 	case 5:
// 		console.log("Пятница");
// 		break;
// 	case 6:
// 		console.log("Суббота");
// 		break;
// 	case 7:
// 		console.log("Воскресенье");
// 		break;
// 	default:
// 		console.log("Ошибка! Нет такого дня недели.");
// }

// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day = 0;

// day = +prompt("Enter your value");

// switch (day) {
// 	case 1:
// 	case 2:
// 	case 3:
// 	case 4:
// 	case 5:
// 	case 6:
// 	case 7:
// 	case 8:
// 	case 9:
// 	case 10:
// 		console.log("Это первая декада месяца");
// 		break;
// 	case 11:
// 	case 12:
// 	case 13:
// 	case 14:
// 	case 15:
// 	case 16:
// 	case 17:
// 	case 18:
// 	case 19:
// 	case 20:
// 		console.log("Это вторая декада месяца");
// 		break;
// 	case 21:
// 	case 22:
// 	case 23:
// 	case 24:
// 	case 25:
// 	case 26:
// 	case 27:
// 	case 28:
// 	case 29:
// 	case 30:
// 	case 31:
// 		console.log("Это третья декада месяца");
// 		break;
// }

//=========================================================================

//===============Таски на циклы (Only FOR)===============================

// Вывести факториал запрошенного числа.

// let num = 0;

// num = +prompt("Enter your number");

// for (let i = 0; i <= num; i++) {
// 	console.log(i);
// }

//вычислить сумму первых N элементов последовательности 1 + 1/2 + 1/3 + ...+ 1/N . параметр N задает пользователь

// let num = 0;
// let result = 0;

// num = +prompt("Enter your number");

// for (let i = 1; i <= num; i++) {
// 	result += 1 / i;
// }

// console.log(result);

//Найти произведение чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение всех чисел от 5 до 12). 

// let lim1 = 0;
// let lim2 = 0;
// let result = 0;

// lim1 = +prompt("Enter your number");
// lim2 = +prompt("Enter your number");

// result = lim1;

// for (let i = lim1 + 1; i <= lim2; i++) {
// 	result *= i;
// }

// console.log(result);

//=========================================================================

//=============Таски на функции==========================================

//Функция которая запрашивает число и проверяет простое ли оно (простое число делиться без остатка на себя и на единицу)

// function division(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i === 0) {
// 			return false;
// 		}
// 	}
// 	return num > 1;
// }

// let value = +prompt("Enter your number");

// console.log(division(value));

//Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:

// function checkMultiplicity(a, b) {
// 	if (a % b === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// const result = checkMultiplicity(25, 3); //false
// const result = checkMultiplicity(25, 5); //true

// console.log(result);

// const checkMultiplicity = function (a, b) {
// 	return a % b === 0;
// }

// console.log(checkMultiplicity(25, 5)); // true
// console.log(checkMultiplicity(15, 5)); // true
// console.log(checkMultiplicity(15, 3)); // true
// console.log(checkMultiplicity(15, 4)); //false


//Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет

// const triangle = function (a, b, c) {
// 	return a + b > c;
// }

// console.log(triangle(2, 2, 5)); //fasle
// console.log(triangle(2, 2, 3)); //true

// function triangle(a, b, c) {
// 	if (a + b > c) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// const result = triangle(4, 4, 5); //true

// console.log(result);

// Написать функции расчета площадей (поверхности) следующих фигур/тел:  треугольника, прямоугольника

// function areaOfTriangle(base, height) {
// 	return 0.5 * base * height;
// }

// let result = areaOfTriangle(22, 33);
// console.log(result);

// function areaOfRectangle(width, long) {
// 	return long * width;
// }

// let result = areaOfRectangle(22, 33);
// console.log(result);

//=========================================================================

//================Таски на объекты=======================================

//1.1 создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
//1.2 создать объект, который содержит свойства, о факультете и кафедре.

// const student = {
// 	name: 'Vasya',
// 	lastName: 'Petrov',
// 	isMale: 'Male',
// 	phone: 380953811693,
// 	email: "vasyaipetrov@i.ua",
// 	study: {
// 		depatment: "economics",
// 		rostrum: 264,
// 	},
// };

// console.log(student);
// console.log(student.study.rostrum);

//=========================================================================

// 2.1 Создать числовой массив и проинициализировать его

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr);

//=========================================================================

//2.1* (усложненное) инициализация с помощью случайных чисел

// function getRandomInt(max) {
// 	return Math.floor(Math.random() * Math.floor(max));
// }

// console.log(getRandomInt(100));

//=========================================================================

// 2.2 Вывести размер массива

// const arr = [222, 111, 'test', 'test2', function () { }, { test: 'test' }, true, false, 'key', 'finish'];

// console.log(arr.length);

//=========================================================================

// 2.3 Вывести элементы с четными индексами

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i += 2) { // let i = 1; не четные
// 	console.log(arr[i]);
// }


//=========================================================================

// 2.4 Вывести только четные элементы (четные числа делятся на 2 без остатка)

// const arr = [1, 2, 6, 77, 18, 24, 45, 67, 111, 134, 667, 345];

// for (let i = 0; i < arr.length; i++) {
// 	if ((arr[i] % 2) === 0) {
// 		console.log(arr[i]);
// 	}
// }

//=========================================================================

//2.5 Вывести индексы нулевых элементов (элемент равен нулю)

// const arr = [1, 2, 3, 4, 0, 2, 0, 4, 0, 32, 56, 0];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] === 0) {
// 		console.log(i);
// 	}
// }

//=========================================================================

// 2.6 Подсчитать количество нулевых элементов

// const arr = [1, 2, 3, 4, 0, 2, 0, 4, 0, 32, 56, 0];

// const result = arr.filter(i => i === 0).length;
// console.log('number of the found elements: ' + result);

//=======================================================================

//===============Таски на функции-конструктор===========================

// Книга (автор, название, год издания, издательство)

// function Book(author, name, year, publishing) {
// 	this.author = author;
// 	this.name = name;
// 	this.year = year;
// 	this.publishing = publishing;
// }

// const book1 = new Book("Daisy Fisher", "Cinderella", 1867, "Goolden Books");

// console.log(book1);

// Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

// function ElectronicBook(author, name, year, publishing, format, number) {
// 	this.author = author;
// 	this.name = name;
// 	this.year = year;
// 	this.publishing = publishing;
// 	this.format = format;
// 	this.number = number;
// }

// const electronicBook1 = new ElectronicBook("Daisy Fisher", "Cinderella", 1999, "Goolden Books", "PDF", 307162338);

// console.log(electronicBook1);

//=======================================================================

//========Дописать функцию конструктор MyArray===========================

// Должны быть реализованы следующие методы: push,pop,forEach

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
// }

// function MyArray() {

// 	this.length = 0;

// 	for (let i = 0; i < arguments.length; i++) {
// 		this[this.length] = arguments[i];

// 		this.length++;
// 	}
// };

// MyArray.prototype = new ArrayMethods();

// const myArr = new MyArray('test', 'test2', 'test3', 2345, true);

//=======================================================================