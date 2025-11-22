let number1 = prompt("Enter number1:");
let number2 = prompt("Enter number2:");
let operation = prompt("Enter the operation:");

switch (operation) {
  case "+":
    document.writeln(`number1 + number2 = ${+number1 + +number2}`);
    console.log(`number1 + number2 = ${number1 + number2}`);
    break;
  case "-":
    document.writeln(`number1 - number2 = ${number1 - number2}`);
    console.log(`number1 - number2 = ${number1 - number2}`);
    break;
  case "*":
    document.writeln(`number1 * number2 = ${number1 * number2}`);
    console.log(`number1 * number2 = ${number1 * number2}`);
    break;
  case "/":
    document.writeln(`number1 / number2 = ${number1 / number2}`);
    console.log(`number1 / number2 = ${number1 / number2}`);
    break;
}
