'use strict';

const algorithm = (num1, num2) => {
  while (num2) {
    num2 = num1 % (num1 = num2);
  }
  return (Math.abs(num1));
};

console.log(algorithm(10, 18));
console.log(algorithm(17, 34));
console.log(algorithm(-15, 30));
console.log(algorithm(7, 11));
console.log(algorithm(-10, -15));
console.log(algorithm(0, 4));
console.log(algorithm(-7, 0));
