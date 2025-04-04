function NtoOne(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  NtoOne(n - 1);
}
NtoOne(7);
