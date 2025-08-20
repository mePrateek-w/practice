function isPrime(n) {
  prime = true;

  if (n === 1) {
    prime = false;
    return prime;
  } else if (n === 2) {
    return prime;
  }
  rootN = Math.sqrt(n);
  for (let i = 2; i <= rootN; i++) {
    if (n % i === 0) {
      prime = [false, i];
      break;
    }
  }
  return prime;
}

function isPrime2(n) {
  prime = true;

  if (n === 1) {
    prime = false;
    return prime;
  } else if (n === 2 || n === 3) {
    return prime;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return [false, "2 OR 3"];
  }
  rootN = Math.sqrt(n);
  for (let i = 5; i * i <= n; i = i = 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      prime = [false, `${i} OR ${i + 2}`];
      break;
    }
  }
  return prime;
}

console.log(isPrime(13769));
console.log(isPrime2(13769));
