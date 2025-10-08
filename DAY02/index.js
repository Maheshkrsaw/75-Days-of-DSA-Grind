// Sample array
let arr = [3, -5, 7, -2, 0, 9, -1];

// 1️⃣ Linear Search
function linearSearch(array, key) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) {
            return i; // returns index if found
        }
    }
    return -1; // not found
}

let searchKey = -2;
console.log(`Element ${searchKey} found at index:`, linearSearch(arr, searchKey));

// 2️⃣ Count Negative Numbers
function countNegatives(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) count++;
    }
    return count;
}

console.log("Number of negative numbers:", countNegatives(arr));

// 3️⃣ Find Largest Number
function findLargest(array) {
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) largest = array[i];
    }
    return largest;
}

console.log("Largest number in the array:", findLargest(arr));
