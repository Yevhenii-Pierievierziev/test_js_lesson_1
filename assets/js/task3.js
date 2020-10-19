//1) Реализовать метод flat для MyArray (сделать как точную копию метода flat у Array; Использовать рекурсию; Пример у вас есть в репозитории с урока.)

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

// 			const buffer = customFlat(array[i], depth - 1);

// 			newArr = newArr.concat(buffer);

// 		} else {
// 			newArr.push(array[i]);
// 		}
// 		return newArr;
// 	}
// }

// 2) Написать функцию глубокого выравнивания для объекта. (flat для объектов).

// const data = {
// 	"dates": {
// 		"expiry_date": "30 sep 2018",
// 		"available": "30 sep 2017",
// 	},
// 	"price": {
// 		"currency": "RM",
// 		"min": 1500,
// 		"max": 2000
// 	}
// };
// const flatten = (obj, prefix = '', res = {}) =>
// 	Object.entries(obj).reduce((r, [key, val]) => {
// 		const k = `${prefix}${key}`
// 		if (typeof val === 'object') {
// 			flatten(val, `${k}.`, r)
// 		} else {
// 			res[k] = val
// 		}
// 		return r
// 	}, res)


// console.log(flatten(data))



// 3) Написать функцию logParenthis используя массивы, а не шаблонные строки.
// logParenthis (3) // ((()))

// let arr = [];

// function logParenthis(number) {
// 	if (number > 0) {
// 		arr.unshift("(");
// 		logParenthis(number - 1);
// 		arr.push(")");
// 	}
// 	return arr.join("");
// }

// logParenthis(5);

// 4) Создать объект user'а. У объекта есть имя, дата рождения(Использовать Date в js), количество отработанных часов за месяц и ставка за час.
//     Реализовать геттеры (get age) на получение возраста и заработной платы.

// const user = {
// 	name: 'Vasya',
// 	birthDay: new Date(1992, 6, 1),
// 	working: 280,
// 	payForHour: 9,

// 	get age() {
// 		let todayYear = new Date().getFullYear();
// 		return todayYear - this.birthDay.getFullYear();
// 	},
// 	get sallary() {
// 		return this.payForHour * this.working;
// 	}
// };

// alert(user.age);
// alert(user.sallary);

// 1)Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».
// строки - итерируемые.

// function numOfVowels(string) {
// 	let count = 0;

// 	for (let i = 0; i < string.length; i++) {
// 		if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u') {
// 			count++;
// 		}
// 	}
// 	return count;
// }

// console.log(numOfVowels('Yellow Submarine'));

// const words = s => s.split("").filter(c => "aeiou".includes(c)).length;

// console.log(words("Yellow Submarine")); // 6

// const findVolews = str => {
// 	let count = 0;
// 	const vowels = ['a', 'e', 'i', 'o', 'u'];
// 	for (let char of str.toLowerCase()) {
// 		if (vowels.includes(char)) {
// 			count++
// 		}
// 	}
// 	return count;
// }

// 2)Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;

// const fizzBuzz = num => {
// 	for (let i = 1; i <= num; i++) {
// 		if (i % 3 === 0 && i % 5 === 0) {
// 			console.log('fizzbuzz');
// 		} else if (i % 3 === 0) {
// 			console.log('fizz');
// 		} else if (i % 5 === 0) {
// 			console.log('buzz');
// 		} else {
// 			console.log(i);
// 		}
// 	}
// }

// 3) Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам.

// function avg(nums) {
// 	return nums.reduce((a, b) => (a + b)) / nums.length;
// }

// console.log(avg([2, 4, 7, 9, 16]));

// 4) Напишите функцию addNum(n), которая вернёт другую функцию. Возвращенная функция должна складывать получаемый аргумент с аргументом n возвращающей функции.
// замыкание.



// 5) Напишите функцию operation(num1, num2, fn), в которой num1 и num2 — числовые переменные, а fn — функция, которая берет два аргумента и выполняет математическую операцию над ними



// 6) Создать объект obj, с методами method1(),method2() и method3(). В методе method3() должна возвращаться строка «метод3». Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3()


//3. Сделайте функцию, которая определяет, есть в массиве заданный элемент или нет.

// const arr = [2, 434, 345, 43, 6, 678, 67, 4546, 456, 45, 456]

// function elementsFind(arr, elem) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === elem) {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// console.log(elementsFind(arr, 6));

//4. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// function getNumber(num) {
// 	let summ = 0;
// 	num += '';
// 	for (let i = 0; i < num.length; i++) {
// 		summ += +num[i];
// 	}
// 	if (num <= 9) {
// 		return num;
// 	} else {
// 		return +getNumber(summ);
// 	}
// }