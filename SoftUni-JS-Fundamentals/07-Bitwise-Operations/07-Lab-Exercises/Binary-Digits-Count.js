function solve(n, b) {
  let binary = n.toString(2);
  let result = 0;

  for (let i = 0; i < binary; i++) {
    if (binary[i] == b) {
      result++;
    }
  }
  console.log(result);
}

solve(20, 0);
