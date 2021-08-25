const spinnerArr = ["|", "/", "-", "\\", "|"];
let delay = 0;
for (const outerkey of spinnerArr) {
  for (const key of spinnerArr) {
    setTimeout(() => {
      process.stdout.write(`\r${key}   `);
    }, delay);
    delay += 200;
  }
}
