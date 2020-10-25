'use strict';

// let test = "test";

// /**
//  * @param {number} age
//  * @returns {boolean}
//  */

// /**
//  * 
//  * @param {number} a - number to square
//  * @returns {number} square 
//  */

//console.log(number); //область видимости

// const result = isAdult(12);
// const result = isAdult(5);

// console.log(result);

// const result2 = square;

// const regAssigneVar = result2(2);

// console.log(cube(3)); //вызов функции после ее объявления;

// const cube = function (num) { // function expression
// 	return num ** 3;
// }



//console.log(result);
// console.log("square func =>"); //regAssigneVar

// function square(a = 2) {
// 	console.log(a);

// 	let number = Number(a);

// 	return number * number;
// }

// function isAdult(age) { //age - принимает один входной параметр(декларирование функции)

// 	// console.log(test)

// 	let number = Number(age); //преобразование входного параметра к числу

// 	let result = isNaN(number); //проверка NaN

// 	// if (isNaN(number)) { //проверка на правду
// 	// 	return false // вернем false
// 	// }

// 	if (result) {
// 		return false;
// 	}

// 	if (age >= 18) { // проверка
// 		return true;
// 	}
// 	return false;
// }


// const degree = function (num) {
// 	return num ** num;
// }

// console.log(degree(5));

// Возвращают результат в заданой степени

// /**
//  * @param {number} base - number to square
//  * @returns {number} exp - square
//  */

// function power(base, exp) {

// 	base = prompt("Enter your number");
// 	exp = prompt("Enter your exponentiation");

// 	let number = Number(base, exp);

// 	let result = isNaN(number);

// 	if (result) {
// 		return false;
// 	}

// 	return base ** exp;

// }
// debugger;
// const result = power();

// console.log(result);

// function value(min, max) {
// 	min = prompt("Enter your min values");
// 	max = prompt("Enter your max values");

// 	let number = Number(min, max);

// 	let result = isNaN(number);

// 	if (result) {
// 		return false;
// 	}
// }

// const result = value();

// console.log(result);


// function returnMax(number1, number2) {
// 	let number = Number(number1, number2);

// 	let result = isNaN(number);

// 	if (result) {
// 		return false;
// 	}

// 	if (number1 < number2) {
// 		return number2;
// 	} else if (number1 > number2) {
// 		return number1;
// 	}
// }

// let number1 = prompt("Enter your value");
// let number2 = prompt("Enter your value");

// const result = returnMax(number1, number2);

// console.log(result);

// function returnMax(number1, number2) {
// 	let number = Number(number1, number2);

// 	let result = isNaN(number);

// 	if (result) {
// 		return false;
// 	}

// 	if (number1 > number2) {
// 		return number2;
// 	} else if (number1 < number2) {
// 		return number1;
// 	}
// }

// let number1 = prompt("Enter your value");
// let number2 = prompt("Enter your value");

// const result = returnMax(number1, number2);

// console.log(result);

//================================Объекты=========================================

// const cat = {
// 	color: "white",
// 	amountOfFingers: 6,
// 	ears: 2,
// 	senseOfHumor: "fine",
// 	head: {
// 		colorEyesBrows: "black",
// 		amountOfTeeth: 30,
// 		wetNose: true,
// 	},
// 	run() { // метод для объекта
// 		return "fast cat!";
// 	}
// };

// console.log(cat);
// console.log(cat.head.amountOfTeeth);

// const table = {
// 	color: "black",
// 	wood: "oak",
// 	amoutOfLegs: 4,
// 	isMess: true,
// 	quantity: {
// 		howMuch: 20,
// 		isBroken: false,
// 		isDirty: true,
// 		whoBought: "Jeremy",
// 	},
// 	crash() {
// 		return "WHOO";
// 	}
// };

// console.log(table);
// console.log(table.quantity.whoBought);

// table.tail = false; // добавить ключ и свойство

// table.color = "white"; // перезаписать существующие свойство

// delete cat.color // удалить свойсто

// cat.color = undefined; // удалить значение, но ключ оставить

// const key = "color";

// const cat = {
// 	color: "red",
// 	weight: 3500,
// 	amoutOfLegs: 4,
// 	breed: "sphinx",
// 	isMale: true,
// 	head: {
// 		amountOfEyes: 2,
// 		eyeColor: "grey",
// 	},
// 	// sayHi() {  // сократить
// 	// 	return "MEOW"; 
// 	// },
// 	sayHi: function sayHi() {
// 		return "MEOW";
// 	},
// };

// console.log(cat);
// console.log(cat.head.eyeColor);

// const cat = {
// 	color: "white",
// 	weight: 5500,
// 	amoutOfLegs: 4,
// 	breed: "sphinx",
// 	isMale: false,
// 	head: {
// 		amountOfEyes: 2,
// 		eyeColor: "grey",
// 	},
// 	// sayHi() {  // сократить
// 	// 	return "MEOW"; 
// 	// },
// 	sayHi: function sayHi() {
// 		return "MEOW";
// 	},
// };

// function Cat(color, weight, breed) {

// 	// this.color = 'black'; //захаркодить
// 	this.color = color;
// 	this.breed = breed;
// 	this.weight = weight;
// 	this.sayHi = function () { //метод sayHi
// 		return "meow";
// 	}
// }

// const cat1 = new Cat("white", 4000, 'sphinx');
// const cat2 = new Cat("white", 3500, 'sphinx');
// const cat3 = new Cat("blue", 4200, 'siams');
// const cat4 = new Cat("red", 2000, 'sphinx');

// cat4.color = 'black'; //изменить цвет

// console.log(cat1, cat2, cat3, cat4);

// function Cat(name) {
// 	this.name = name;
// 	this.sayHi = function () {
// 		return `My name is ${this.name}`; // подставлять имя из принимаего значения
// 	}
// }

// const cat1 = new Cat("Jeremy");

// cat1.name = 'TEST'; // имя которое мы изменяем

// console.log(cat1);


// function Country(name, people, area) {
// 	this.name = name;
// 	this.people = people;
// 	this.area = area;
// 	this.getDensity = function () {
// 		return this.people / this.area;
// 	}
// }

// const country1 = new Country("Ukraine", 47000000, 73);

// console.log(country1);

// function Car(model, distance, time, isGoing) {

// 	this.model = model;
// 	this.distance = distance;
// 	this.time = time;
// 	this.isGoing = isGoing;
// 	this.getSpeed = function () {
// 		return this.distance / this.time;
// 	}
// }
// const car1 = new Car("mercedes-benz", 200, 50, false);

// console.log(car1);

// Создайте функцию конструктор, которая принимает свойства для автомобиля, которая измеряет скорость и состояние

// function Car(model) {
// 	this.model = model,
// 		this.speed = 0;
// 	this.isGoing = false;

// 	this.checkSpeed = function () {
// 		this.isGoing = this.speed !== 0;
// 	};

// 	this.accelerate = function (speed) {
// 		this.speed += speed;
// 		this.checkSpeed();
// 		return this.speed;
// 	};
// }

// const car1 = new Car("Tesla");
// console.log(car1);

// const box = {
// 	test: "value", //ключ это либо строки либо символы
// 	key: "testValue",
// 	size: "large",
// };

// function Box(size, color, content) {
// 	this.content = content;
// 	this.size = size;
// 	this.color = color;

// 	this.open = function () {
// 		return `${this.content} openend`;
// 	};
// }


// function Crate(size, material, content) {
// 	this.content = content;
// 	this.size = size;
// 	this.material = material;
// }

// Crate.prototype = new Box(); // задаем прототип(Box) для Crate

// const crate1 = new Crate("small", "wood", "testContent");

// console.log(crate1);
// console.log(crate1.open());

// function User(isMale, age, name) {
// 	this.isMale = isMale;
// 	this.age = age;
// 	this.name = name;

// 	this.sayHi = function () {
// 		return `Hi, my name is ${this.name}`;
// 	}
// }

// function Employee(position, experience, salary) {
// 	this.salary = salary;
// 	this.position = position;
// 	this.experience = experience;
// }

// User.prototype = new Employee();

// const employee1 = new Employee("manager", "elementary", 4500);

// console.log(employee1);
// console.log(employee1.sayHi());

// копирование по значению

// const string = 'str';

// let str1 = string;
// let str2 = string;

// console.log(str1);
// console.log(str2);

// str1 += 'test';

// console.log(str1);
// console.log(str2);

// // Копирование по ссылке

// const controlObj = {
// 	content: 'content',
// 	test: "test"
// };

// const anotherObj = controlObj;

// Cпособы создания массива 

// const arr100 = []; // literal
// const arr199 = new Array();

// const arr222 = [1341, 21231, 24352, 'set', true, { test: "test" }, function () { }];

// console.log(arr222);
// console.log(arr222.length);

// const arr = [222, 111, 'test', 'test2', function () { }, { test: 'test' }, true, false, 'key', 'finish'];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);

// const arr = [222, 111, 'test', 'test2', function () { }, { test: 'test' }, true, false, 'key', 'finish'];

// arr.forEach(function (item, i, arr) {
// 	alert(i + ": " + item + " (массив:" + arr + ")");
// });

// item - очередной элемент;
// i - его номер;
// arr - массив, который перебирается;

// выводить каждый элемент с новой строки

// const arr = [222, 111, 'test', 'test2', function () { }, { test: 'test' }, true, false, 'key', 'finish'];

// function logArreyElements(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		console.log(arr[i]);
// 	}
// }

// logArreyElements(arr);

// const arr = [222, 111, 'test', 'test2', function () { }, { test: 'test' }, true, false, 'key', 'finish'];

// function logArreyElements(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		console.log(arr[i]);
// 	}

// 	console.log('=====================');

// 	arr.forEach(function (item) { // принимает один елемент массива
// 		console.log(item);
// 	});

// }

// logArreyElements(arr);

//map - исп. заданную функцию для каждого элемента в массиве и возвращает этот элемент

// arr.map(function (item) {
// 	return item * 2
// });


//=======================================================================



// function list() {
// 	console.log(arguments)
// }

// list(1, 2, 3, 4, 5, 6, 7, 8, 9);\

// const controlArray = ['test', 'test2', 'test3', 2345, true];

// function ArrayMethods() {
// 	this.push = function () {
// 		for (let i = 0; i < arguments.length; ++i) {
// 			this[++this.arguments] = arguments[i];
// 			return this.length;
// 		}
// 	};
// 	this.pop = function () {
// 		const lastIndex = this.length - 1;
// 		const lastItem = this[lastIndex];

// 		delete this[lastIndex];

// 		--this.length;

// 		return lastItem;
// 	};
// }

// function MyArray() {

// 	this.lenght = 0;

// 	for (let i = 0; i < arguments.length; i++) {
// 		this[this.length] = arguments[i];
// 		//{0: '123'}
// 		this.length++;
// 	}
// }

// MyArray.prototype = new ArrayMethods();

// const myArr = new MyArray('test', 'test2', 'test3', 2345, true);

// console.log(myArr.pop());
// console.log(myArr.push("test"));


//====================switct example;===========================

// const input = prompt("Choose your destiny: 1. Burger, 2 - Pizza, 3 - Chocolate");

// switch (input) {
// 	case '1': {
// 		alert('You chose Burger');
// 	}
// 		break;
// 	case '2': {
// 		alert('You chose Pizza');
// 	}
// 		break;
// 	case '3': {
// 		alert('You chose chocolate');
// 	}
// 		break;
// 	default: {
// 		alert('You chose nothing!');
// 	}
// }

//=============================Arrow Function=========================

// function sum(a, b) {
// 	return a + b;
// }

// const sum2 = function (a, b) {
// 	return a + b;
// };

// const sum3 = (a, b) => {
// 	return a + b;
// }

// const sum4 = a => a + a; //сокрвщенный вариант стрелочной функции

// function sum(a, b) {
// 	return a ** b;
// }

// const sum2 = function (a, b) {
// 	return a ** b;
// }

// const sum3 = (a, b) => a ** b;

// const sum4 = a => a ** a;

//======================Closure example(Замыкание)=======================

// function makeCounter() {
// 	let count = 10;

// 	return function addCount() {
// 		return ++count;
// 	};
// }

// const counter = makeCounter();
// const counter2 = makeCounter();

//========================================================================