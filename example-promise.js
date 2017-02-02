// function getTempPromise (location) {
// 	return new Promise(function (resolve, reject) {
// 		resolve(790);
// 		reject('City not found');
// 	});
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
// 	console.log('promise success', temp);
// }, function (err) {
// 	console.log('promise error', err);
// })

function addPromise(a, b) {
	return new Promise(function (resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else {
			reject('You need to Input numbers');
		}
	});
}

addPromise(10, 5).then(function (sum) {
	console.log('promise success', sum);
}, function (err) {
	console.log('promise error', err);
})

addPromise('a', 5).then(function (sum) {
	console.log('promise success', sum);
}, function (err) {
	console.log('promise error', err);
})
