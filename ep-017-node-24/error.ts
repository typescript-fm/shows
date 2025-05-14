const error = new Error('An error');
const notError = { message: 'Not an error' };

console.log(Error.isError(error)); // true
console.log(Error.isError(notError)); // false