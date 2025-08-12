function nToOne(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  nToOne(n - 1);
}
nToOne(5);

/**
 * This function is tail recursive as the caller has to do
 * nothing else after the recursive call ends.
 * A bit faster to execute when compared to non tail recursive functions.
 *
 * No overhead of storing the state. Modern compilers replace the line with
 * n = n -1;
 * goto start
 *
 * And add a label start at the beginning of the funciton.
 * So it basically becomes an iterative function.
 *
 * This is called Tail Call Elimination
 */
