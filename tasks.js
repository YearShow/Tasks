// Сумма элементов массива

// const array = [1, 2, 2, 4, 5, 6, 6];

// let sum = 0;
// for (let i = 0; i < array.length; i++) {
// 	sum += array[i];
// }

// let sum = array.reduce((acc, next) => acc + next, 0);

// console.log(
// 	eval(
// 		array.join('+')
// 	)
// );

// Сумма max/min элементов массива

// const array = [1, 2, 2, 4, 5, 6, 160];

// let max = array[0];

// for (let i = 0; i < array.length; i++) {
// 	// if (array[i] > max) {
// 	// 	max = array[i];
// 	// }

// 	// max = array[i] > max ? array[i] : max;

// 	max = Math.max(array[i], max);
// }

// let max = array.reduce((acc, next) => Math.max(acc, next))

// array.sort((x1, x2) => x1 - x2)

// let max = array[array.length - 1]; //(let max = array.pop())
// console.log(max);

// console.log(
// 	// Math.max(...array)
// 	Math.max.apply(null, array)
// );

// Сортировка массива

// const array = [160, 5, 11, 2, 2, 4, 5, 6];

// array.sort((x1, x2) => {
// 	if (x1 < x2) {
// 		return -1;
// 	}
// 	if (x1 === x2) {
// 		return 0;
// 	}
// 	return 0;
// })

// array.sort((x1, x2) => x1 - x2)

// // console.log(array);

// const users = [
// 	{
// 		name: 'Bohn Doe',
// 		age: 20
// 	},
// 	{
// 		name: 'Alex Moren',
// 		age: 30
// 	},
// 	{
// 		name: 'Cveta',
// 		age: 29
// 	}
// ]

// // users.sort((u1, u2) => u1.age - u2.age);
// users.sort((u1, u2) => {
// 	// if (u1.name < u2.name) {
// 	// 	return -1;
// 	// }
// 	// if (u1.name === u2.name) {
// 	// 	return 0;
// 	// }
// 	// return 1;
// 	return u1.name.localeCompare(u2.name)
// })
// console.log(users);

// Разворот массива

// const array = [160, 5, 11, 2, 2, 4, 5, 6];

// const reversed = [];

// for (let i = array.length - 1; i >= 0; i--) {
// 	reversed.push(array[i]);
// }

// const reversed = array.map((el, index, arr) => arr[arr.length - index - 1])

// console.log(
// 	[...array].map(array.pop, array)
// )

// console.log(reversed);

// Удалить falsy значения

const array = [7, 'correct', 0, false, 9, NaN, ''];

// const notFalsy = [];

// for (let i = 0; i < array.length; i++) {
// 	if (!!array[i]) {
// 		notFalsy.push(array[i])
// 	}
// }

// const notFalsy = array.filter(n => !!n)
// const notFalsy = array.filter(n => Boolean(n))
const notFalsy = array.filter(Boolean)
console.log(notFalsy);