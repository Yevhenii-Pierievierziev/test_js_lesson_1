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