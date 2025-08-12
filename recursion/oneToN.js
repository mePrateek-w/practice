function oneToN(n) {
  if (n === 0) {
    return;
  }
  oneToN(n - 1);
  console.log(n);
}

function oneToNtailRecursive(n, k) {
  if (n === 0) {
    return;
  }
  console.log(k);
  oneToNtailRecursive(n - 1, k + 1);
}

// oneToNtailRecursive(5, 1);

oneToN(5);

/**
 * This function is not tail recursive as the caller has to do
 * something else after the recursive call ends.
 * A bit slower to execute when compared to tail recursive funcitons.
 *
 * Not every non tail revursive function can be converted to a'
 * tail recursive function.
 */
