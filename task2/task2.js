let marks = prompt("Enter your marks");
marks = Number(marks);

if (marks < 50) {
  alert("Fail");
} else if (marks >= 50 && marks <= 59) {
  alert("The mark is D");
} else if (marks >= 60 && marks <= 69) {
  alert("The mark is C");
} else if (marks >= 70 && marks <= 79) {
  alert("The mark is B");
} else if (marks >= 80 && marks <= 89) {
  alert("The mark is A");
} else if (marks >= 90 && marks <= 100) {
  alert("The mark is A+");
} else {
  alert("Invalid mark");
}
