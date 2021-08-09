// Factorialize a number with recursion

const factorialize = num => {
  if (num >= 1) {
    return num * factorialize(num - 1);
  } else {
    return 1;
  }
}

console.log(factorialize(4));