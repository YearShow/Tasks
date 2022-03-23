/**
 * Алгоритм - это набор последовательных действий,
 * которые решают какую-то задачу
 */

// Линейный поиск

// const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

// let count = 0;
// function linearSearch(array, item) {
// 	for (let i = 0; i < array.length; i++) {
// 		count += 1;
// 		if (array[i] === item) {
// 			return i;
// 		}
// 	}
// 	return null;
// }

// console.log(linearSearch(array, 11));
// console.log('count = ', count);

// ================= Бинарный поиск =====================


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let count = 0;
// function binarySearch(array, item) {
// 	let start = 0;
// 	let end = array.length
// 	let middle;
// 	let found = false;
// 	let position = -1;
// 	while (found === false && start <= end) {
// 		count += 1;
// 		middle = Math.floor((start + end) / 2);
// 		if (array[middle] === item) {
// 			found = true;
// 			position = middle;
// 			return position;
// 		}
// 		if (item < array[middle]) {
// 			end = middle - 1;
// 		} else {
// 			start = middle + 1;
// 		}
// 	}
// 	return position;
// }

// console.log(binarySearch(array, 15));
// console.log('count = ', count);

// Рекурсивный бинарный поиск

function recursiveBinarySearch(array, item, start, end) {
	let middle = Math.floor((start + end) / 2);
	count += 1;
	if (item === array[middle]) {
		return middle;
	}
	if (item < array[middle]) {
		return recursiveBinarySearch(array, item, start, middle - 1)
	} else {
		return recursiveBinarySearch(array, item, middle + 1, end)
	}
}
console.log(recursiveBinarySearch(array, 3, 0, array.length));
console.log('count = ', count);
//========================================================
//========================================================
// Сортировка

// Сортировка выбором

// const arr = [0, 3, 2, 5, 6, 8, 1, 9, -1, -5];

// let count = 0;

// function selectionSort(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		let indexMin = i;
// 		for (let j = i + 1; j < array.length; j++) {
// 			if (array[j] < array[indexMin]) {
// 				indexMin = j;
// 			}
// 			count += 1;
// 		}
// 		let tmp = array[i];
// 		array[i] = array[indexMin];
// 		array[indexMin] = tmp;
// 	}
// 	return array;
// }

// console.log(selectionSort(arr));
// console.log('count = ', count);

// ============ Пузырьковая сортировка ==================


// const arr = [0, 3, 2, 5, 6, 8, 1, 9, -1, -5];
// let count = 0;

// function bubbleSort(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = 0; j < array.length; j++) {
// 			if (array[j + 1] < array[j]) {
// 				let tmp = array[j];
// 				array[j] = array[j + 1];
// 				array[j + 1] = tmp;
// 			}
// 			count += 1;
// 		}
// 	}
// 	return array;
// }

// console.log(bubbleSort(arr));
// console.log('count = ', count);

//Рекурсия

// const factorial = (n) => {
// 	if (n === 1) {
// 		return 1;
// 	}
// 	return n * factorial(n - 1);
// }

// const fibonachi = (n) => {
// 	if (n === 1 || n === 2) {
// 		return 1;
// 	}
// 	return fibonachi(n - 1) + fibonachi(n - 2);
// }

// // Быстрая сортировка (Хоара)

// const arr = [0, 3, 2, 5, 6, 8, 1, 9, -1, -5, 0, 3, 2, 5, 6, 8, 1, 9, -1, -5];
// let count = 0;

// function quickSort(array) {
// 	if (array.length <= 1) {
// 		return array;
// 	}
// 	let pivotIndex = Math.floor(array.length / 2);
// 	let pivot = array[pivotIndex];
// 	let less = [];
// 	let greater = [];
// 	for (let i = 0; i < array.length; i++) {
// 		count += 1;
// 		if (i === pivotIndex)
// 			continue;
// 		if (array[i] < pivot) {
// 			less.push(array[i]);
// 		} else {
// 			greater.push(array[i]);
// 		}
// 	}
// 	return [...quickSort(less), pivot, ...quickSort(greater)];
// }

// console.log(quickSort(arr));
// console.log('count = ', count);