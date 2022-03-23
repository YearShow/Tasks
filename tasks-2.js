// Почему такая конструкция работает в JS

// var a = 'abc';
// var b = a.length;

//  ( new String(a).length )

// Почему не работает:

// let a = 'abc';
// a[0] = 'D';
// console.log(a);

//( примитивы имутабельны)

// Суммировать:

// const arr = [[1, 2, [3, 4]], [9], [10, 12]];

// recursive + sum
// flat + sum

// const result = arr.flat(Infinity).reduce((acc, next) => acc + next, 0)

// function flat(n) {
// 	let res = [];
// 	n.forEach(item => {
// 		if (Array.isArray(item)) {
// res = res.concat(
// 	flat(item)
// );

// 			res = [
// 				...res,
// 				...flat(item)
// 			]
// 		} else {
// 			res.push(item);
// 		}
// 	});
// 	return res;
// }

// const result = flat(arr).reduce((acc, next) => acc + next);

// console.log(result);


// TimeOut внутри цикла

// for (var i = 0; i < 10; i++) {
// 	setTimeout(() => {
// 		console.log(i);
// 	}, 0)
// }

// for (let i = 0; i < 10; i++) {
// 	setTimeout(() => {
// 		console.log(i);
// 	}, 0)
// }

//(!)
// for (var i = 0; i < 10; i++) {
// 	setTimeout((n) => {
// 		console.log(n);
// 	}, 0, i)
// }

// function fn(n) {
// 	setTimeout(() => {
// 		console.log(n);
// 	}, 0);
// }

// for (var i = 0; i < 10; i++) {
// 	fn(i)
// }

// for (var i = 0; i < 10; i++) {
// 	(function (n) {
// 		setTimeout(() => {
// 			console.log(n);
// 		}, 0)
// 	})(i)
// }


// Порядок выполнения асинхронного кода

// console.log(1);

// const a = new Promise((res, rej) => res(console.log(2)))

// a.then(res => console.log(3))

// setTimeout(() => {
// 	console.log(4);
// }, 0)

// console.log(5);

// Написать запрос на сервер через xmlhttprequest и fetch

// const req = new XMLHttpRequest();

// req.open('GET', 'https://jsonplaceholder.typicode.com/posts');
// req.send();

// // req.onload = function () {
// // 	console.log(req.response);
// // }

// req.addEventListener('readystatechange', function () {
// 	if (req.readyState === 4) {
// 		console.log(req.response);
// 	}
// })

// const req = fetch('https://jsonplaceholder.typicode.com/posts', {
// 	method: 'GET',
// });
// req.then(res => res.json())
// 	.then(data => console.log(data))

// const getPosts = async () => {
// 	try {
// 		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
// 			method: 'GET',
// 		});
// 		const data = await response.json();
// 		console.log(data)
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// getPosts();


// Реализовать promise.all

// function wait(t, text) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(resolve, t, text);
// 	});
// }

// Promise.all([
// 	Promise.resolve(20),
// 	wait(1000),
// 	wait(3000)
// ]).then(res => {
// 	console.log(res);
// })

// function promiseAll(promises) {
// 	const res = [];
// 	const q = promises.length;

// 	return new Promise((resolve, reject) => {
// 		for (let i = 0; i < q; i++) {
// 			promises[i].then(response => {
// 				res.push(response);

// 				if (q === res.length) {
// 					resolve(res);
// 				}
// 			})
// 		}
// 	})
// }

// async function promiseWaitEach(promise) {
// 	for await (let p of promise) {
// 		const d = await p;

// 		console.log(d);
// 	}
// }

// promiseAll([
// 	Promise.resolve(20),
// 	wait(1000),
// 	wait(1000),
// 	wait(1000),
// 	wait(1000),
// 	wait(1000)
// ]).then(r => {
// 	console.log(r);
// })

// promiseWaitEach([
// 	wait(0, '3'),
// 	wait(500, '2'),
// 	wait(1000, '1'),
// 	wait(1500, ''),
// 	wait(2000, 'I\'m waiting'),
// 	wait(2500, 'for it'),
// 	wait(3000, 'waiting'),
// 	wait(3500, 'for it...')
// ]).then(r => {
// 	console.log(r);
// })

/*Сумма элементов через замыкание
	sum(1)(2)(3)()
*/

// function sum(n) {
// 	let acc = n;

// 	return function accumulate(i) {
// 		if (typeof i === 'number') {
// 			acc += i;

// 			return accumulate;
// 		}
// 		return acc;
// 	}
// }

// console.log(sum(1)(2)(3)());

// const p = sum(10)(10);

// const p2 = p(10)(10);
// console.log(p2());