function insertionSort(arr) {
  let n = arr.length;

  for (let i = 0; i <= n - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }

  console.log("After Using insertion sort:");
  console.log(arr.join(" "));
}

// Main
let arr = [13, 46, 24, 52, 20, 9];
console.log("Before Using insertion Sort:");
console.log(arr.join(" "));

insertionSort(arr);
