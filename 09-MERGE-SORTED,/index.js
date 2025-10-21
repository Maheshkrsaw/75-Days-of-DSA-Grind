/*


let nums1 = [1, 10, 5,40,50];
let nums2 = [2, 50, 8,50,80,60,50,40];

// Step 1: append nums2 elements into nums1
for (let i = 0; i < nums2.length; i++) {
  nums1.push(nums2[i]);
}

// Step 2: sort in non-decreasing order (ascending)
nums1.sort((a, b) => a - b);

console.log(nums1); // [1, 2, 2, 5, 5, 8]


*/

/*


let nums1 = [2,5,6];
let nums2 = [1,2,3];

function merge(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let nums1copy = nums1.slice(0, m); // create copy of nums1
  let p1 = 0; // pointer for nums1copy
  let p2 = 0; // pointer for nums2

  // iterate through the total length (m + n)
  for (let i = 0; i < m + n; i++) {
    // ✅ condition 1: if nums2 is finished OR nums1copy’s element is smaller
    if (p2 >= n || (p1 < m && nums1copy[p1] < nums2[p2])) {
      nums1[i] = nums1copy[p1];
      p1++;
    } 
    // ✅ condition 2: otherwise take element from nums2
    else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }

  return nums1;
}

console.log(merge(nums1, nums2));



*/

let nums1 = [2, 5, 6];
let nums2 = [1, 2, 3];

function merge(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let p1 = m - 1; // pointer for nums1copy
  let p2 = n - 1; // pointer for nums2

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
}

console.log(merge(nums1, nums2));
