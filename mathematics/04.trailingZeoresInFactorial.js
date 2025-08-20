function trailingZeroesInFactorial(n) {
  count = 0;
  for (i = 5; i <= n; i = i * 5) {
    count = count + Math.floor(n / i);
  }
  return count;
}

console.log(trailingZeroesInFactorial(25)); //6
console.log(trailingZeroesInFactorial(125)); //31
console.log(trailingZeroesInFactorial(251)); //62
