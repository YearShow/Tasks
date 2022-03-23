// ===================== fibonacci =============================

//1, 1, 2, 3, 5, 8, 13
// f(n) = f(n -1) + f(n - 2);

// function fibonachi(n) {
// 	if (n <= 0) {
// 		return 0;
// 	}
// 	if (n <= 2) {
// 		return 1;
// 	}
// 	return fibonachi(n - 1) + fibonachi(n - 2)
// }

// console.log(fibonachi(6));

// function iterationFibonachi(n) {
// 	if (n <= 0) {
// 		return 0;
// 	}
// 	if (n <= 2) {
// 		return 1;
// 	}
// 	let prev = 1;
// 	let result = 1;
// 	for (let i = 0; i < n - 2; i++) {
// 		let tmp = result;
// 		result += prev;
// 		prev = tmp;
// 	}
// 	return result;
// }

// ====================== palindrom =============================

function palindrom(word) {
	word = word.toLowerCase();
	for (let i = 0; i < word.length / 2; i++) {
		if (word[i] !== word[word.length - i - 1]) {
			return false;
		}
	}
	return true;
}

console.log(palindrom('aazaa'))