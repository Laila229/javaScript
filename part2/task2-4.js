function multiplication2(a, b) {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
}

console.log(multiplication2(5, 4));
console.log(multiplication2(2, 8));
console.log(multiplication2(7, 6));
