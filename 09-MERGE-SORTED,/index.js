let nums1 = [1, 10, 5,40,50];
let nums2 = [2, 50, 8,50,80,60,50,40];

// Step 1: append nums2 elements into nums1
for (let i = 0; i < nums2.length; i++) {
  nums1.push(nums2[i]);
}

// Step 2: sort in non-decreasing order (ascending)
nums1.sort((a, b) => a - b);

console.log(nums1); // [1, 2, 2, 5, 5, 8]
