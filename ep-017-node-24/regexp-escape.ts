const userInput = '.*+?^${}()|[]\\';
const escaped = RegExp.escape(userInput);
const regex = new RegExp(escaped);
console.log(regex.test(userInput)); // true
