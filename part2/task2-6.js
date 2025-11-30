function isPandigital(num) {
  let str = num.toString();
  for (let digit = 0; digit <= 9; digit++) {
    if (!str.includes(digit.toString())) {
      return false;
    }
  }
  return true;
}

console.log(isPandigital(98140723568910)); // true
console.log(isPandigital(90864523148909)); // false
