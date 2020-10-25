//1) Реализовать метод flat для MyArray (сделать как точную копию метода flat у Array; Использовать рекурсию; Пример у вас есть в репозитории с урока.)


function ArrayMethods() {
	this.push = function () {
		for (let i = 0; i < arguments.length; i++) {
			this[this.length++] = arguments[i];
		}
		return this.length;
	};
	this.pop = function () {
		const lastIndex = this.length - 1;
		const lastItem = this[lastIndex];

		delete this[lastIndex];

		--this.length;

		return lastItem;
	};
	this.forEach = function (callback) {
		for (let i = 0; i < this.length; i++) {
			callback(this[i], i, this);
		}
	};
	this.concat = function (array) {
		let result = new MyArray();
		for (let i = 0; i < this.length; i++) {
			result.push(this[i]);
		}
		for (let i = 0; i < this.length; i++) {
			result.push(array[i]);
		}
		return result;
	};
	this.flat = function (depth = 1) {
		if (depth < 0) {
			console.error("depth must be a positive value");
			return;
		}
		let newArr = new MyArray();
		if (depth === 0) {
			return this;
		}
		for (let i = 0; i < this.length; i++) {
			if (Array.isArray(this[i])) {
				const buffer = this[i].flat(depth - 1);

				newArr = newArr.concat(buffer);
			} else if (this[i] !== undefined) {
				newArr.push(this[i]);
			}
		}
		return newArr;
	};
}

function MyArray() {
	this.length = 0;
	for (let i = 0; i < arguments.length; i++) {
		this[this.length] = arguments[i];
		this.length++;
	}
}

MyArray.prototype = new ArrayMethods();

const myArr = new MyArray('test', undefined, undefined, undefined, undefined, [[[[[5]]]]]);

//=================================================================================

// 2) Написать функцию глубокого выравнивания для объекта. (flat для объектов).

const data = {
	"dates": {
		"expiry_date": "30 sep 2018",
		"available": "30 sep 2017",
	},
	"price": {
		"currency": "RM",
		"min": 1500,
		"max": 2000
	}
};
const flatten = (obj, prefix = '', res = {}) =>
	Object.entries(obj).reduce((r, [key, val]) => {
		const k = `${prefix}${key}`
		if (typeof val === 'object') {
			flatten(val, `${k}.`, r)
		} else {
			res[k] = val;
		}
		return r;
	}, res);


console.log(flatten(data))

//=================================================================================

// 3) Написать функцию logParenthis используя массивы, а не шаблонные строки.

function logPar(sumElements) {
	let logParenthisArr = [];

	logParenthis(sumElements);

	function logParenthis(number) {

		if (number > 0) {
			logParenthisArr = [...logParenthisArr, "("];
			logParenthis(number - 1);
			logParenthisArr = [...logParenthisArr, ")"];
		}
	}
	return logParenthisArr.join("");
}
logPar(5);

//=================================================================================

// 4) Создать объект user'а. У объекта есть имя, дата рождения(Использовать Date в js), количество отработанных часов за месяц и ставка за час.
//     Реализовать геттеры (get age) на получение возраста и заработной платы.

const user = {
	name: 'Vasya',
	birthDay: new Date(1992, 6, 1),
	working: 280,
	payForHour: 9,

	get age() {
		let todayYear = new Date().getFullYear();
		return todayYear - this.birthDay.getFullYear();
	},
	get sallary() {
		return this.payForHour * this.working;
	}
};

alert(user.age);
alert(user.sallary);

//=================================================================================

// 1)Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».
// строки - итерируемые.

function numOfVowels(string) {
	let count = 0;

	for (let i = 0; i < string.length; i++) {
		if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u') {
			count++;
		}
	}
	return count;
}

console.log(numOfVowels('Yellow Submarine'));

const words = s => s.split("").filter(c => "aeiou".includes(c)).length;

console.log(words("Yellow Submarine")); // 6

const findVolews = str => {
	let count = 0;
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	for (let char of str.toLowerCase()) {
		if (vowels.includes(char)) {
			count++
		}
	}
	return count;
}

//=================================================================================

// 2)Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;

const fizzBuzz = num => {
	for (let i = 1; i <= num; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('fizzbuzz');
		} else if (i % 3 === 0) {
			console.log('fizz');
		} else if (i % 5 === 0) {
			console.log('buzz');
		} else {
			console.log(i);
		}
	}
}

//=================================================================================

// 3) Создайте функцию avg(), которая будет находить среднее значение по всем своим аргументам.

function avg(...nums) {
	return nums.reduce((a, b) => (a + b)) / nums.length;
}

console.log(avg(2, 4, 7, 9, 16));

//=================================================================================

// 4) Напишите функцию addNum(n), которая вернёт другую функцию. Возвращенная функция должна складывать получаемый аргумент с аргументом n возвращающей функции.
// замыкание.

function addNum(initialValue = 0) {

	let accumulate = initialValue;

	return function sumNumber(number) {
		return (accumulate = accumulate + number);
	}
};

//=================================================================================

// 5) Напишите функцию operation(num1, num2, fn), в которой num1 и num2 — числовые переменные, а fn — функция, которая берет два аргумента и выполняет математическую операцию над ними

function operation(num1, num2, fn) {
	return fn(num1, num2);
}

const sumNumbers = (number1, number2) => {
	return number1 + number2;
};

console.log(operation(10, 15, sumNumbers));

//=================================================================================

// 6) Создать объект obj, с методами method1(),method2() и method3(). В методе method3() должна возвращаться строка «метод3». Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3()

const obj = {
	method1() {
		return this;
	},
	method2() {
		return this;
	},
	method3() {
		return "method 3";
	},
};

obj.method1().method2().method3();

//=================================================================================


















