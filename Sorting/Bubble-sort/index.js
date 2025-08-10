function bubbleSort(arr, n) {
  for (let i = n - 1; i >= 0; i--) {
    let didSwap = 0;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        didSwap = 1;
      }
    }
    if (didSwap === 0) {
      break; // array already sorted
    }
  }

  // Print array manually
  let output = "";
  for (let i = 0; i < n; i++) {
    output += arr[i] + " ";
  }
  console.log("After Using bubble sort:");
  console.log(output);
}

// Main
let arr = [13, 46, 24, 52, 20, 9];
let n = arr.length;

// Print original array manually
let original = "";
for (let i = 0; i < n; i++) {
  original += arr[i] + " ";
}
console.log("Before Using Bubble Sort:");
console.log(original);

bubbleSort(arr, n);
