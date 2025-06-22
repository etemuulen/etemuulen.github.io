function runPrimeCounter() {
  const n = parseInt(document.getElementById("size").value);
  const choice = document.getElementById("choice").value;
  const z = new Set();
  const y = new Set();

  for (let a = 2; a <= n; a++) {
    z.add(a);
    for (let b = 2; b < a; b++) {
      if (a % b === 0) {
        y.add(a);
        break;
      }
    }
  }

  const primes = [...z].filter(x => !y.has(x));
  const output = document.getElementById("output");

  if (choice === "number") {
    output.textContent = `There are ${primes.length} prime numbers in the set of size ${n}.`;
  } else if (choice === "list") {
    output.textContent = `The list of prime numbers is:\n${primes.join(", ")}.`;
  } else {
    output.textContent = `There are ${primes.length} prime numbers.\n\nThe list is:\n${primes.join(", ")}.`;
  }
}
