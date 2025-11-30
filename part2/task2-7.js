
let drink = prompt("Enter your favorite drink:").toLowerCase();

switch (drink) {
  case "banana":
    console.log("The price of a banana drink is 3jd");
    break;
  case "orange":
    console.log("The price of an orange drink is 4jd");
    break;
  case "mango":
    console.log("The price of a mango drink is 5jd");
    break;
  case "coffee":
    console.log("The price of coffee is 3jd");
    break;
  default:
    console.log("Sorry, this drink is not available.");
}
