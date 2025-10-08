# 75 Days of DSA Grind – Day 02 🚀💻  

**Topic:** Loop Practice & Array Operations  

## Overview 📝
Day 02 was focused on **practical array problems using loops**. Building mastery over loops and array operations is essential for solving most DSA questions efficiently.  

**Concepts Covered:**  
- Looping through arrays (`for`, `while`)  
- Searching for an element in an array (Linear Search)  
- Counting negative numbers in an array  
- Finding the largest number in an array  

## Approach & Problem-Solving Strategy 🧠
- **Break problems into small steps:** iterate → check condition → update result.  
- **Dry-run examples** on small arrays to validate logic.  
- Focused on **clean, readable JS code** to reduce errors.  
- Applied **loop + condition pattern** repeatedly for different array problems.  

## Tips & Best Practices 💡
- Initialize counters or max/min variables **before looping**.  
- Test edge cases: empty arrays, single-element arrays, all negative numbers.  
- Loops + conditions are the **core building blocks** for array-based DSA problems.  

## Sample Code Examples 💻
```javascript
// Search an element in an array
function searchElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1; // not found
}

// Count negative numbers in an array
function countNegatives(arr) {
  let count = 0;
  for (let num of arr) if (num < 0) count++;
  return count;
}

// Find the largest number in an array
function findLargest(arr) {
  let max = arr[0];
  for (let num of arr) if (num > max) max = num;
  return max;
}

// Example usage
const arr = [3, -2, 5, -7, 0];
console.log("Index of 5:", searchElement(arr, 5)); // 2
console.log("Negative numbers count:", countNegatives(arr)); // 2
console.log("Largest number:", findLargest(arr)); // 5
