function checkPalindrome(n) {
  n = Math.abs(n);
  let m = reverseNumber(n);
  return m === n;
}

function reverseNumber(n) {
  if (n < 10) {
    return n;
  }

  reverse = 0;
  while (n > 0) {
    let remainder = n % 10;
    reverse = reverse * 10 + remainder;
    n = Math.floor(n / 10);
  }
  return reverse;
}
