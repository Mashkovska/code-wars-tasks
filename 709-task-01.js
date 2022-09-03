// 1) https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
function grow(x){
  return x.reduce((a, b) => a * b);
}
//2) https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
function zero(num) { return num ? num(0) : 0}
function one(num) { return num ? num(1) : 1}
function two(num) { return num ? num(2) : 2}
function three(num) { return num ? num(3) : 3}
function four(num) { return num ? num(4) : 4}
function five(num) { return num ? num(5) : 5}
function six(num) { return num ? num(6) : 6}
function seven(num) { return num ? num(7) : 7}
function eight(num) { return num ? num(8) : 8}
function nine(num) { return num ? num(9) : 9}

function plus(b) {return function(a){
  return a + b;
};};
function minus(b) {return function(a){
  return a - b;
}}
function times(b) {return function(a){
  return a * b;
}}
function dividedBy(b) {return function(a){
  return Math.floor(a / b);
}}
// 3) https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
function digitalRoot(n) {
  if (n < 10) {
    return n;
  }
  return digitalRoot(
    n.toString().split('').reduce((acc, d) => {
      return acc + +d;
    },0));
}
