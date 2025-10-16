/*
// remove duplicates in inplace

let nums = [0, 0, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums) {
  let x = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x++;
      nums[x] = nums[i];
    }
  }
  return x + 1;
}

let result = removeDuplicates(nums);
console.log(result, nums);
*/









// let nums = [3, 5, 11, 22, 2, 3 , 3, 3, 4];
// let val =3;
// function removElelemnt (val, nums){
//   let x=0
//   for(let i=0; i<nums.length;i++){
//     if(nums[i]!==val){
//       nums[x]=nums[i];
//       x++;
//     }
//   }
//   return x;
// }

// let result = removElelemnt(nums,val);
// console.log(result, nums);


// remove Element

let nums = [3,1,3,4,3,3,3,7];
let val = 3;

function removeElement(val, nums) {
  let x = 0; // position for next non-val element
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[x] = nums[i];
      x++;
    }
  }
  return x; // number of remaining elements
}

let result = removeElement(val, nums);
console.log("New length:", result);
console.log("Updated array:", nums.slice(0, result));
