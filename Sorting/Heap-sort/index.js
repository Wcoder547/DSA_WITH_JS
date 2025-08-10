// Heapify function to maintain max heap property
function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // left child index
  let right = 2 * i + 2; // right child index

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    // Swap arr[i] and arr[largest]
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Main heap sort function
function heapSort(arr) {
  let n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // One by one extract elements
  for (let i = n - 1; i >= 0; i--) {
    // Move current root to end
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  // Print array manually
  let output = "";
  for (let i = 0; i < n; i++) {
    output += arr[i] + " ";
  }
  console.log("After Heap Sort:");
  console.log(output);
}

// Example usage
let arr = [13, 46, 24, 52, 20, 9];

let original = "";
for (let i = 0; i < arr.length; i++) {
  original += arr[i] + " ";
}
console.log("Before Heap Sort:");
console.log(original);

heapSort(arr);
