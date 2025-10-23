/*


let  nums = [9,6,4,2,3,5,7,0,1]

function missingno(nums){
    let n=nums.length;
    let totalSum=n*(n+1)/2;
    let partialSum=0;

    for(let i=0;i<n;i++){
        partialSum=partialSum+nums[i];
    }
    return totalSum-partialSum;
}

console.log(missingno(nums));

output:- 8
*/

/*

let nums=[4,1,2,1,2];

function singleno(nums){
    let hash={};
    for(let i=0 ; i<nums.length;i++){
        if(!hash[nums[i]]==1){
            hash[nums[i]]=1;
        }else{
             hash[nums[i]]++;
        }
    }
     for(let i=0 ; i<nums.length;i++){
        if( hash[nums[i]]==1){
            return nums[i];
        }
     }
}

console.log(singleno(nums));
// 4


*/



