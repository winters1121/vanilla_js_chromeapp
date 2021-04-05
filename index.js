const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiple: function (a, b) {
    return a * b;
  },
  division: function (a, b) {
    return a / b;
  },
  square: function (a, b) {
    return a ** b;
  },
};

// console.log(greetSw);
const plus = calculator.plus(10, 10);
console.log(plus);
const minus = calculator.minus(10, 5);
console.log(minus);
const multiple = calculator.multiple(10, 1000);
console.log(multiple);
const division = calculator.division(1000, 10);
console.log(division);
const square = calculator.square(100, 10);
console.log(square);
