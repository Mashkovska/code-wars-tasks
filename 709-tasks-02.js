//1) Double Integer    https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  return i * 2;
}
//2) Century From Year    https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function century(year) {
  return Math.ceil(year/100);
}
//3) Multyply two numbers    https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript
 function multiply(a, b) {
   return a * b;
 } 
 //or
 let multiply = (a, b) => a * b;
//4) Volume of Cuboid    https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
//5) Make negative    https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return -Math.abs(num);
}
//6) Cockroach speed    https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
function cockroachSpeed(s) {
  return Math.floor(s / 0.036);
}
//7) Angle of triangle    https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
function otherAngle(a, b) {
  return 180 - (a + b);
}
//8) Twice as old    https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld * 2 - dadYearsOld);
}
//9) Return n-th even number    https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n){
  return (n-1)*2;
}
//10) What's the real floor     https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
const getRealFloor = n => {
  return n <= 0 ? n : n > 13 ? n-2 : n-1;
}
//11) Clock    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s){
  return h * 3600000 + m * 60000 + s * 1000;
}
//12) Is n divisible by x and y    https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return (n%x == 0 && n%y ==0) ? true : false;
}
