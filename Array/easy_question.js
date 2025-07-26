// =====================================
// Question: Largest Element in an Array
// =====================================
const arr1 = [3, 2, 4, 7, 7, 10];

function findLargestElement(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

const largestElement = findLargestElement(arr1);
console.log("Largest Element:", largestElement);
// Time Complexity: O(n)

// ===================================================
// Question: Second Largest Element (Better Approach)
// ===================================================
function findSecondLargestBetter(array, max) {
  let secondLargest = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > secondLargest && array[i] !== max) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
}

const secondLargestBetter = findSecondLargestBetter(arr1, largestElement);
console.log("Better Second Largest:", secondLargestBetter);
// Time Complexity: O(2n)

// ===================================================
// Question: Largest & Second Largest (Optimal Approach)
// ===================================================
function findLargestAndSecondLargest(array) {
  let max = array[0];
  let secondMax = -1;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      secondMax = max;
      max = array[i];
    } else if (array[i] !== max && array[i] > secondMax) {
      secondMax = array[i];
    }
  }

  console.log("Largest:", max);
  return secondMax;
}

const secondLargestOptimal = findLargestAndSecondLargest(arr1);
console.log("Optimal Second Largest:", secondLargestOptimal);
// Time Complexity: O(n)

// ===================================================
// Question: Smallest & Second Smallest (Optimal)
// ===================================================
function findSmallestAndSecondSmallest(array) {
  let min = array[0];
  let secondMin = Number.MAX_SAFE_INTEGER; //SecondMin 9007199254740991

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      secondMin = min;
      min = array[i];
    } else if (array[i] !== min && array[i] < secondMin) {
      secondMin = array[i];
    }
  }

  console.log("Smallest:", min);
  return secondMin === Number.MAX_SAFE_INTEGER ? -1 : secondMin;
}

const secondSmallest = findSmallestAndSecondSmallest(arr1);
console.log("Optimal Second Smallest:", secondSmallest);
// Time Complexity: O(n)

// ==========================================
// Question: Check if Array is Sorted or Not
// ==========================================
function isArraySorted(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      return false;
    }
  }
  return true;
}

const sortedStatus = isArraySorted(arr1);
console.log("Is Array Sorted?:", sortedStatus);
// Time Complexity: O(n)

// ==========================================
// Question: Remove Duplicates in Sorted Array
// ==========================================
const arr2 = [1, 1, 2, 2, 3, 3];

function removeDuplicatesSorted(array) {
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[j] !== array[i]) {
      i++;
      array[i] = array[j];
    }
  }
  return array.slice(0, i + 1);
}

const noDuplicates = removeDuplicatesSorted(arr2);
console.log("Unique Elements:", noDuplicates);
// Time Complexity: O(n)

// =====================================
// Question: Left Rotate Array by One
// =====================================
function leftRotateByOne(array) {
  const first = array[0];
  for (let i = 1; i < array.length; i++) {
    array[i - 1] = array[i];
  }
  array[array.length - 1] = first;
  return array;
}

const arr3 = [...arr1]; // Clone for preservation
const rotatedOnce = leftRotateByOne(arr3);
console.log("Left Rotated by 1:", rotatedOnce);
// Time Complexity: O(n)

// ========================================
// Question: Left Rotate Array by D Places
// ========================================
function leftRotateByD(array, d) {
  const n = array.length;
  const rotation = d % n;
  const temp = array.slice(0, rotation); //t.c=>O(d)

  for (
    let i = rotation;
    i < n;
    i++ //t.c=>O(n- d)
  ) {
    array[i - rotation] = array[i];
  }

  for (
    let i = 0;
    i < rotation;
    i++ //t.c=>O(d)
  ) {
    array[n - rotation + i] = temp[i];
  }

  return array;
}

const arr4 = [...arr1]; // Clone for preservation
const d = 3;
const rotatedByD = leftRotateByD(arr4, d);
console.log(`Left Rotated by ${d}:`, rotatedByD);
//T.c=(d+n-d+d)=>d+n=>n
// Time Complexity: O(n)

// ================================================
// Question: Left Rotate Array by D Places (Optimal)
// ================================================

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function leftRotateByDOptimal(array, d) {
  const n = array.length;
  const rotation = d % n;

  // Step 1: Reverse first d elements
  reverse(array, 0, rotation - 1);

  // Step 2: Reverse the rest
  reverse(array, rotation, n - 1);

  // Step 3: Reverse the entire array
  reverse(array, 0, n - 1);

  return array;
}

const arr5 = [...arr1]; // Clone for preservation

const rotatedOptimal = leftRotateByDOptimal(arr5, d);
console.log(`Left Rotated by ${d} (Optimal):`, rotatedOptimal);

// Time Complexity: O(n)
// Space Complexity: O(1)

// ====================================================
// Question: Move All the zeros to the end of an array.
// ====================================================

const contains_zero = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
temp = [];
function isContainZero() {
  for (let i = 0; i < contains_zero.length; i++) {
    if (contains_zero[i] != 0) {
      temp.push(contains_zero[i]);
    }
  }
  for (let i = 0; i < temp.length; i++) {
    contains_zero[i] = temp[i];
  }
  const nz = temp.length;
  for (i = nz; i < contains_zero.length; i++) {
    contains_zero[i] = 0;
  }
  return contains_zero;
}
const arr6 = isContainZero();
console.log(arr6);

//Time-complexicity=O(2N)
//Space-Complexicity=O(N)

// ==============================================
// Question: Move All Zeros to End (Optimal)
// ==============================================

function moveZerosToEnd(arr) {
  let j = 0; // Pointer for placing non-zero elements

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // Swap only if i != j to avoid redundant operations
      if (i !== j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      j++; // Move j to next position
    }
  }

  return arr;
}

const result = moveZerosToEnd([...contains_zero]); // Use spread to clone

console.log("After Moving Zeros to End:", result);

// Time Complexity: O(n)
// Space Complexity: O(1)

//Linear search
function LinearSearch(num) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == num) {
      return i;
    }
  }
  return -1;
}
const arr7 = LinearSearch(5);
console.log(arr7);

// ==========================================
// Question: Union of Two Sorted Arrays
// ==========================================

function unionSortedArrays(arr1, arr2) {
  let i = 0,
    j = 0;
  const union = [];

  while (i < arr1.length && j < arr2.length) {
    // Skip duplicates in arr1
    while (i > 0 && i < arr1.length && arr1[i] === arr1[i - 1]) i++;
    // Skip duplicates in arr2
    while (j > 0 && j < arr2.length && arr2[j] === arr2[j - 1]) j++;

    if (i >= arr1.length || j >= arr2.length) break;

    if (arr1[i] < arr2[j]) {
      union.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      union.push(arr2[j]);
      j++;
    } else {
      union.push(arr1[i]);
      i++;
      j++;
    }
  }

  // Add remaining elements of arr1
  while (i < arr1.length) {
    if (i === 0 || arr1[i] !== arr1[i - 1]) {
      union.push(arr1[i]);
    }
    i++;
  }

  // Add remaining elements of arr2
  while (j < arr2.length) {
    if (j === 0 || arr2[j] !== arr2[j - 1]) {
      union.push(arr2[j]);
    }
    j++;
  }

  return union;
}

// Example usage:
const arr12 = [1, 2, 2, 3, 4];
const arr23 = [2, 3, 5, 6];
const result2 = unionSortedArrays(arr12, arr23);
console.log("Union:", result2);

// Time Complexity: O(n + m)
// Space Complexity: O(n + m) [for result array]

const count = [1, 2, 4, 5];

function missingNumber() {
  // Since there should be one missing number in the range 1 to n+1
  for (let i = 1; i <= count.length + 1; i++) {
    let found = false;
    for (let j = 0; j < count.length; j++) {
      if (count[j] === i) {
        // use comparison operator
        found = true;
        break; // found the number, no need to continue scanning
      }
    }
    if (!found) {
      // If not found in the entire array, i is the missing number
      return i;
    }
  }
  return null; // In case nothing is missing
}

const missing = missingNumber();
console.log("Missing Number:", missing);
// Expected Output: Missing Number: 3

//Better solution
function BetterMissingNumber(arr) {
  const n = arr.length + 1; // Since one number is missing
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}

const arr8 = BetterMissingNumber(count);
console.log("Missing Number:", arr8);

// Time Complexity: O(n)
// Space Complexity: O(1)

// ======================================================
// Question: Find Missing Number Using XOR (Optimized)
// ======================================================

function missingNumberUsingXOR(arr) {
  const n = arr.length + 1; // Since one number is missing

  let xor1 = 0; // XOR of all numbers from 1 to n
  let xor2 = 0; // XOR of all elements in array

  // XOR 1 to n
  for (let i = 1; i <= n; i++) {
    xor1 ^= i;
  }

  // XOR all elements in array
  for (let i = 0; i < arr.length; i++) {
    xor2 ^= arr[i];
  }

  // Missing number = xor1 ^ xor2
  return xor1 ^ xor2;
}

// Example:

const arr9 = missingNumberUsingXOR(count);
console.log("Missing Number (XOR):", arr9);

// Time Complexity: O(n)
// Space Complexity: O(1)

// ====================================================
// Question: Find Max Consecutive 1s in a Binary Array
// ====================================================

const new_array = [1, 1, 0, 1, 1, 1, 0, 1, 1];

let maxCount = 0;
let count1 = 0;

for (let i = 0; i < new_array.length; i++) {
  if (new_array[i] === 1) {
    count1++;
    maxCount = Math.max(maxCount, count1);
  } else {
    count1 = 0;
  }
}

console.log("Max Consecutive 1s:", maxCount);

// Time Complexity: O(n)
// Space Complexity: O(1)

// =================================================================
// Question: Find the Number that appears once and others appear twice
// =================================================================

const my_array = [1, 1, 2, 3, 3, 4, 4];

function findSingleBruteForce(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count2 = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count2++;
      }
    }
    if (count2 === 1) {
      return arr[i];
    }
  }
}

const singleNum = findSingleBruteForce(my_array);
console.log("Single Number (Brute Force):", singleNum);

// Time Complexity: O(n²)
// Space Complexity: O(1)

// ====================================================================
// Question: Longest Sub-Array with Sum +K (Brute)
// ====================================================================
// A sub-array is a contiguous (connected) part of an array.
// This means the elements in the sub-array must appear in the same order and must be next to each other in the original array.

function longestSubArrayWithSumK(arr, K) {
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum === K) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }

  return maxLen;
}

const sub_array = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
const K = 4;

const result3 = longestSubArrayWithSumK(sub_array, K);
console.log("Longest Sub-array length with sum", K, "is:", result3);

// ====================================================================
// Question: Longest Sub-Array with Sum +K (optimal)
// ====================================================================
function longestSubarrayWithSumK(arr, K) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let maxLength = 0;

  while (right < arr.length) {
    sum += arr[right];

    // Shrink the window from the left if sum > K
    while (sum > K && left <= right) {
      sum -= arr[left];
      left++;
    }

    // If sum matches K, update maxLength
    if (sum === K) {
      maxLength = Math.max(maxLength, right - left + 1);
    }

    right++;
  }

  return maxLength;
}
const arr = [1, 2, 1, 1, 1, 4, 2, 3];
const K2 = 5;
const result6 = longestSubarrayWithSumK(arr, K2);
console.log("Longest Subarray Length with Sum K:", result6);

// ====================================================================
// Question: Longest Sub-Array with Sum +K and -K (optimal)
// ====================================================================
//Optimal Approach (Using 2 pointers):
function getLongestSubarray(a, k) {
  let n = a.length; // size of the array

  let left = 0,
    right = 0; // 2 pointers
  let sum = a[0];
  let maxLen = 0;
  while (right < n) {
    // if sum > k, reduce the subarray from left
    // until sum becomes less or equal to k
    while (left <= right && sum > k) {
      sum -= a[left];
      left++;
    }

    // if sum = k, update the maxLen i.e. answer
    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    // Move forward the right pointer
    right++;
    if (right < n) sum += a[right];
  }

  return maxLen;
}

let a = [2, 3, 5, -1, 9, 1];
let k = 9;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);

//subarray: `[ -1, 9, 1 ]
// Time Complexity- O(N)
// Space Complexity-O(1)
