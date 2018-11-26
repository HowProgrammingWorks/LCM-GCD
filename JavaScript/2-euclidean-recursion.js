'use strict';

const euclideanRecursion = (num1, num2) => {
  if (!num2) {
    return (Math.abs(num1));
  } else {
    return euclideanRecursion(num2, num1 % num2);
  }
};

console.log(euclideanRecursion(10, 18));
console.log(euclideanRecursion(17, 34));
console.log(euclideanRecursion(-15, 30));
console.log(euclideanRecursion(7, 11));
console.log(euclideanRecursion(-10, -15));
console.log(euclideanRecursion(0, 4));
console.log(euclideanRecursion(-7, 0));
