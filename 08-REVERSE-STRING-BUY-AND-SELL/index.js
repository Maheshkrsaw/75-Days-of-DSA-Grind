let arr = ['h', 'e', 'l', 'l', 'o'];
function reverseno(arr) {
    // let start = 0;
    let length=arr.length;
    let half = Math.floor(arr.length/2);
   for(i=0;i<half;i++){
        let temp = arr[i];
        arr[i] = arr[length-1-i];
        arr[length-1-i] = temp;
        
    }
    return arr;
}
console.log(reverseno(arr)); 
