// The same group name "year" appears twice, allowing extraction of a year value 
// regardless of date format (yyyy-mm or mm-yyyy)
const yearMatcher = /(?<year>[0-9]{4})-[0-9]{2}|[0-9]{2}-(?<year>[0-9]{4})/;

console.log("2025-05", "2025-05".match(yearMatcher).groups?.year)
console.log("05-2025", "05-2025".match(yearMatcher).groups?.year)