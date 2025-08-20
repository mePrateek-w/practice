function hcf(a, b) {
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}

function hcf2(a, b) {
  if (b === 0) {
    return a;
  } else {
    return hcf2(b, a % b);
  }
}

console.log(hcf(10, 15));
console.log(hcf2(10, 15));
