'use strict';

const euclideanAlgorithm = (num1, num2) => {
  while (num2) {
    num2 = num1 % (num1 = num2);
  }
  return (Math.abs(num1));
};

console.log(euclideanAlgorithm(10, 18));
console.log(euclideanAlgorithm(17, 34));
console.log(euclideanAlgorithm(-15, 30));
console.log(euclideanAlgorithm(7, 11));
console.log(euclideanAlgorithm(-10, -15));
console.log(euclideanAlgorithm(0, 4));
console.log(euclideanAlgorithm(-7, 0));
