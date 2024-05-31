
// // Qus 1 sum of first and last digit of a number



// let number = 12345;

// let originalNumber = number;
// let lastDigit = 0;
// let firstDigit = 0;


// while (number > 0) {
//   lastDigit = number % 10;
//   number = Math.floor(number / 10);
// }


// number = originalNumber;


// firstDigit = number;
// while (firstDigit >= 10) {
//   firstDigit = Math.floor(firstDigit / 10);
// }


// const sum = firstDigit + lastDigit;

// console.log(`Sum of first and last digit of ${originalNumber} is ${sum}`);









// // qus 2 count number of digits in a number

// const num = 123456; 

// let count = 0;
// let tempNum = num;

// while (tempNum > 0) {
//   tempNum = Math.floor(tempNum / 10);
//   count++;
// }

// console.log(`Number of digits in ${num} is ${count}`);







// // qus 3 Fibonacci Sequence

// let n = 10;

// let a = 0;
// let b = 1;
// let fibSeries = '';

// while (n > 0) {
//   fibSeries += a + ' ';
//   const nextTerm = a + b;
//   a = b;
//   b = nextTerm;
//   n--;
// }

// console.log(`Fibonacci sequence: ${fibSeries}`);





// // qus 4 Check Armstrong Number

// const armstrongNum = 153;

// let tempArmstrong = armstrongNum;
// let sum = 0;

// while (tempArmstrong > 0) {
//   const digit = tempArmstrong % 10;
//   sum += digit ** 3;
//   tempArmstrong = Math.floor(tempArmstrong / 10);
// }

// if (sum === armstrongNum) {
//   console.log(`${armstrongNum} is an Armstrong number.`);
// } else {
//   console.log(`${armstrongNum} is not an Armstrong number.`);
// }






// // qus 5 Find the Palindrome Number or not


// const palindromeNum = 121;

// let tempPalindrome = palindromeNum;
// let reversedNum = 0;

// while (tempPalindrome > 0) {
//   const digit = tempPalindrome % 10;
//   reversedNum = reversedNum * 10 + digit;
//   tempPalindrome = Math.floor(tempPalindrome / 10);
// }

// if (reversedNum === palindromeNum) {
//   console.log(`${palindromeNum} is a palindrome number.`);
// } else {
//   console.log(`${palindromeNum} is not a palindrome number.`);
// }
