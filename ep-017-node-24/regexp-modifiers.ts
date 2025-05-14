const re1 = /^[a-z](?-i:[a-z])$/i;
console.log(re1.test("ab")); // true
console.log(re1.test("Ab")); // true
console.log(re1.test("aB")); // false

const re2 = /^(?i:[a-z])[a-z]$/;
console.log(re2.test("ab")); // true
console.log(re2.test("Ab")); // true
console.log(re2.test("aB")); // false