// Insertion sort implementation in pure JavaScript (No built-in helpers)
function insertionSort(arr, n) {
  for (let i = 0; i <= n - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      // Swap arr[j] and arr[j-1]
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }

  // Print array manually
  let output = "";
  for (let i = 0; i < n; i++) {
    output += arr[i] + " ";
  }
  console.log("After insertion sort:");
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
console.log("Before insertion sort:");
console.log(original);

insertionSort(arr, n);
