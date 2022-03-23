// const START = Date.now();

// function someFn() {
// 	console.log('time', Date.now() - START);
// 	console.log('args', arguments);
// }

// Function.prototype.delay = function (ms) {
// 	return (...args) => {
// 		setTimeout(() => {
// 			this.call(this, ...args);
// 		}, ms)
// 	};
// };

// const f = someFn.delay(500)

// f('arg1', 'arg', 1, 2)

// Дерево

const tree = [
	{
		v: 5,
		c: [
			{
				v: 10,
				c: [
					{
						v: 11,
					}
				]
			},
			{
				v: 7,
				c: [
					{
						v: 5,
					}
				]
			}
		]
	},
	{
		v: 5,
		c: [
			{
				v: 10
			},
			{
				v: 15
			}
		]
	}
]

const recursive = (tree) => {
	let sum = 0;
	tree.forEach(node => {
		sum += node.v;
		if (!node.c) {
			return node.v;
		}
		sum += recursive(node.c);
	})
	return sum
}

const iteration = (tree) => {
	if (!tree.length) {
		return 0;
	}
	const stack = [];
	let sum = 0;
	tree.forEach(node => {
		stack.push(node)
	})
	while (stack.length) {
		const node = stack.pop();
		sum += node.v;
		if (node.c) {
			node.c.forEach(n => {
				stack.push(n)
			})
		}
	}
	return sum;
}


/** Реализовать функцию, которая будет суммировать числа
 * и выводить в логи
 * Пример
 *sum(5)(4)(11)(111)(5)
 * result log
 *
 */

// function sum(n) {
// 	console.log(n);
// 	return function (a) {
// 		return sum(a + n);
// 	}
// }

// // sum(5)(5)(10)


/**
 * Функция принимает два объекта с разными ключами, некоторые из
 * которых могут пересекаться.
 * Необходимо вернуть первый объект с обновленными значениями
 * из второго объекта (только те, которые совпадают)
 *
 * Example:
 * obj1 = {
 * 	foo: 'foo',
 * 	bar: 'bar',
 * }
 * obj2 = {
 * 	bar: 'foo',
 * 	some: 'some',
 * }
 * result = {
 * 	foo: 'foo',
 * bar: 'foo'
 * }
 */

// const mergeSameKeysOfObjects = (obj1, obj2) => {
// 	let keysOfObj1 = Object.keys(obj1);
// 	let keysOfObj2 = Object.keys(obj2);
// 	for (let i = 0; i < keysOfObj1.length; i++) {
// 		let key1 = keysOfObj1[i];
// 		for (let j = 0; j < keysOfObj2.length; j++) {
// 			let key2 = keysOfObj2[j];
// 			if (key1 === key2) {
// 				obj1[key1] = obj2[key2]
// 			}
// 		}
// 	}
// 	console.log(obj1);
// }

// const mergeSameKeysOfObjects = (obj1, obj2) => {
// 	for (let key in obj1) {
// 		if (obj2.hasOwnProperty(key)) {
// 			obj1[key] = obj2[key]
// 		}
// 	}
// 	console.log(obj1);
// }

// mergeSameKeysOfObjects(
// 	{ foo: 'foo', bar: 'bar' },
// 	{ bar: undefined, some: 'some' }
// )

/** Реализовать функцию, которая принимает 2 параметраЖ
 * - массив значений
 * - коллбэк по результату которого будут группироваться значения
 *
 * Функция должна возвращать составной совокупный объект,
 * где ключи это названия групп, а значения сами группы
 *
 */

// const groupBy = (arr, callbackFunction) => {
// 	const result = {}
// 	arr.forEach(item => {
// 		let resultAfterCallback = callbackFunction(item);
// 		result[resultAfterCallback]
// 			? result[resultAfterCallback].push(item)
// 			: result[resultAfterCallback] = [item]
// 	})
// 	console.log(result);
// }

// groupBy([6.1, 4.2, 6.3], Math.ceil)

// Свой map

// const array = [1, 25, 55, 77, -5, 108];

// Array.prototype.myMap = function (cb) {
// 	const result = [];
// 	const thisArray = this;
// 	for (let i = 0; i < thisArray.length; i++) {
// 		result.push(cb(thisArray[i], i, thisArray))
// 	}

// 	return result;
// }

// array.myMap((el, index, arr) => { });

// Свой bind

const person = {
	name: 'Nasya'
}

function info(phone, email) {
	console.log(`Имя: ${this.name}, тел.: ${phone}, Email: ${email}`);
}



// function bind(fn, context, ...rest) {
// 	return function (...args) {
// 		const uniqId = Date.now().toString();

// 		context[uniqId] = fn;

// 		const result = context[uniqId](...rest.concat(args))

// 		delete context[uniqId]

// 		return result
// 	}
// }

// bind(info, person)('112', 'w@i')
// bind(info, person, '112')('w@i')
// bind(info, person, '112', 'w@i')()


// method 2

// Function.prototype.myBind = function (context, ...args) {
// 	return (...args2) => {
// 		const fn = Symbol();
// 		context[fn] = this;
// 		const bound = context[fn](...args.concat(args2));
// 		delete context[fn];
// 		return bound;
// 	}
// }

// info.myBind(person)('112', 'w@i')
// info.myBind(person, '112')('w@i')
// info.myBind(person, '112', 'w@i')()