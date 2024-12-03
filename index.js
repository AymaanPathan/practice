function printToN(n) {
  if (n === 0) return 0;
  console.log(n);
  return printToN(n - 1);
}
printToN(2);
