function lcm(a, b) {
  if (a > b) {
    let x = a;
    a = b;
    b = x;
  }

  result = 0;
  i = 1;

  while (result === 0) {
    if ((b * i) % a === 0) {
      result = b * i;
    }
    i++;
  }
  return result;
}

function lcm2(a, b) {
  hcfAB = hcf(a, b);

  result = (a * b) / hcfAB;
  return result;
}

function hcf(a, b) {
  if (b === 0) {
    return a;
  } else {
    return hcf(b, a % b);
  }
}

console.log(lcm(137, 4));
console.log(lcm2(137, 4));
