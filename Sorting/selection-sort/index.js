// Selection sort implementation in pure JavaScript (No built-in helpers)
function selectionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let mini = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[mini]) {
        mini = j;
      }
    }
    // Swap elements
    let temp = arr[mini];
    arr[mini] = arr[i];
    arr[i] = temp;
  }

  // Print array manually
  let output = "";
  for (let i = 0; i < n; i++) {
    output += arr[i] + " ";
  }
  console.log("After selection sort:");
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
console.log("Before selection sort:");
console.log(original);

selectionSort(arr, n);
