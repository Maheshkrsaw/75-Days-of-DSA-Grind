function countdigit(n){
    let count=0;
    while(n>0){
        n=Math.floor(n/10);
        count++
    }
    return count
}

let num=259;
let results=countdigit(num);
console.log(results);
