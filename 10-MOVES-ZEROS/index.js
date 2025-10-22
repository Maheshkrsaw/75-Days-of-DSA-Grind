/*
// moves 0 in last 



let nums=[0,1,0,3,12];

function moves(nums){
let x=0;
for(let i=0;i<nums.length;i++){
    if(nums[i]!== 0){
        nums[x]=nums[i];
        x++;
    }
}
for(i=x;i<nums.length;i++){
    nums[i]=0;
}
return nums;
}

console.log(moves(nums));
//[ 1, 3, 12, 0, 0 ] 


*/





let nums =[1,1,0,1,1];
function consecutiveno(nums){
    let currentCount=0;
    let maxcount=0;
    for(let i=0; i<nums.length;i++){
        if(nums[i]==1){
            currentCount++;
        }else{
            maxcount=Math.max(currentCount,maxcount);
            currentCount=0;
        }
    }
    return Math.max(currentCount,maxcount);
}

console.log(consecutiveno(nums));
