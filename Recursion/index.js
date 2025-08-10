// 1️⃣ Factorial using recursion
function factorial(n) {
  if (n === 0 || n === 1) return 1; // base case
  return n * factorial(n - 1); // recursive call
}

// 2️⃣ Fibonacci using recursion
function fibonacci(n) {
  if (n === 0) return 0; // base case
  if (n === 1) return 1; // base case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 3️⃣ Sum of natural numbers using recursion
function sumNatural(n) {
  if (n === 0) return 0; // base case
  return n + sumNatural(n - 1);
}

// 4️⃣ Reverse a string using recursion
function reverseString(str) {
  if (str.length <= 1) return str; // base case
  return reverseString(str.slice(1)) + str[0];
}

// 5️⃣ Power of a number using recursion
function power(base, exp) {
  if (exp === 0) return 1; // base case
  return base * power(base, exp - 1);
}

// ------------------- Test -------------------
console.log("Factorial of 5:", factorial(5)); // 120
console.log("Fibonacci(6):", fibonacci(6)); // 8
console.log("Sum of first 5 natural numbers:", sumNatural(5)); // 15
console.log("Reverse of 'hello':", reverseString("hello")); // olleh
console.log("2^5:", power(2, 5)); // 32

