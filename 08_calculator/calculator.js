const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  return array.reduce((total, currentValue) => total += currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((total, currentValue) => total *= currentValue, 1);
};

const power = function(base, exponential) {
	return base**exponential;
};

const factorial = function(number) {
  factorialValue = 1;
	for (let i = number; i > 0; i--) {
    factorialValue *= i;
  }
  return factorialValue;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
