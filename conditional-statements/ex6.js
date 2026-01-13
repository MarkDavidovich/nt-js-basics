let year = 2024;
let isLeapYear = false;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  isLeapYear = true;
}

console.log(year + " is a leap year? " + isLeapYear);
