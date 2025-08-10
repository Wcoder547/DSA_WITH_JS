function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  // Merge two sorted halves into temp
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  // Copy remaining elements from left half
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  // Copy remaining elements from right half
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // Copy sorted temp back into original array
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mergeSort(arr, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

let arr = [9, 4, 7, 6, 3, 1, 5];
console.log("Before Sorting Array:");
console.log(arr.join(" "));

mergeSort(arr, 0, arr.length - 1);

console.log("After Sorting Array:");
console.log(arr.join(" "));
