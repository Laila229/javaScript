let num = 1;

for (let row = 1; row <= 4; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += num + " ";
    num++;
  }
  console.log(line);
}
