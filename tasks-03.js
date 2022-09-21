// 1) Write a function that finds the sum of all its arguments.

function sum() {
  return Array.prototype.reduce.call(arguments, function(a, b) {
        return a + b;  
    }, 0);
}

//2) Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
}

//3) Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
function countPositivesSumNegatives(input) {
  let positiveNums = 0;
  let negativeNums = 0;
    if (input === null || input.length === 0) {
      return [];
    } else {
      input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
    }
    return [positiveNums , negativeNums];
}

// 4) If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
function solution(number){
  let n = 0;
    for (var i = 3; i < number; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            n += i;
        }
    }
  return n;
}

// 5) Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
  return number % 2 ? "Even" : "Odd";
}

// 6) In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.
function alphabetPosition(text) {
  return text.split('').filter(v=>/[a-zA-Z]/.test(v)).map(v=>v.toLowerCase().charCodeAt(0)-96).join(' ');
}

// 7) You need to write regex that will validate a password to make sure it meets the following criteria:
//At least six characters long
//contains a lowercase letter
//contains an uppercase letter
//contains a digit
//only contains alphanumeric characters (note that '_' is not alphanumeric)

const REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;
