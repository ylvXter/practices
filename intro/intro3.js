
// Câu 3: Tìm ước chung lớn nhất 
function UCLN(m, n) {
  m = Math.abs(m);
  n = Math.abs(n);
  if (n > m) {var temp = m; m = n; n = temp;}
  while (true) {
      if (n == 0) return m;
      m %= n;
      if (m == 0) return n;
      n %= m;
}
}
console.log(UCLN(10,22))
