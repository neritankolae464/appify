/*
   Filename: ComplexCode.js
   Description: This code demonstrates a complex algorithm for generating a Fibonacci sequence and then finding the prime numbers in the sequence.
*/

// Function to generate Fibonacci sequence up to a given limit
function generateFibonacci(limit) {
  let sequence = [0, 1];
  
  for (let i = 2; i < limit; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  
  return sequence;
}

// Function to check if a number is prime
function isPrime(number) {
  if (number === 1 || number === 0) {
    return false;
  }
  
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Generate Fibonacci sequence up to a limit of 1000
const fibonacciSequence = generateFibonacci(1000);

// Find prime numbers in the Fibonacci sequence
const primeNumbers = fibonacciSequence.filter((number) => isPrime(number));

// Print the prime numbers
console.log("Prime Numbers in the Fibonacci Sequence:");
primeNumbers.forEach((number) => console.log(number));