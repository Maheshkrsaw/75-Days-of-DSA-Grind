let arr = ['m', 'a', 'h', 'e', 's', 'h'];
function reverseno(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
console.log(reverseno(arr)); // ['h','s','e','h','a','m']
