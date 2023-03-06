// ADD NUMBERS FUNCTION
function addNumbers(array) {
  const sum = array.reduce((total, current) => total + current);
  return sum;
}

//FIND MAX NUMBER FUNCTION
function findMaxNumber() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

//ADD ONLY NUMBERS FUNCTION
function addOnlyNumbers(array) {
  let sum = 0;
  array.forEach((item) => {
    if (!Number.isNaN(parseFloat(item))) {
      sum += parseFloat(item);
    }
  });
  return sum;
}

//GET DIGITS FUNCTION
function getDigits(str) {
  const pattern = /\d+/g;
  const digitsString = str.match(pattern).join(" ");
  return digitsString;
}

// REVERSE STRING FUNCTION
function reverseString(string) {
  let reverseStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseStr += string[i];
  }
  return reverseStr;
}

// GET CURRENT DATE
function getCurrentDate() {
  const date = new Date();
  return date;
}
