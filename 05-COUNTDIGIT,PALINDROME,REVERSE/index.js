/*
Q)count how many digits??

function countdigit(n){
    let count=0;
    if(n==0) return 1;
    n=Math.abs(n);
    while(n>0){
        n=Math.floor(n/10);
        count++
    }
    return count
}

let num=-1110.3366;
let results=countdigit(num);
console.log(results);
*/

/*
Q)check no is palindrome or not ??
 

function ispalindrome(x){
    let xcopy=x;
    //handling the -ve no 
    if(x<0) return false;
    let rev=0;
    while(x>0){
       let rem=x%10;
        rev=(rev*10)+rem;
        x=Math.floor(x/10);
    }
    return xcopy===rev;
}
let num=525;
let results=ispalindrome(num);
console.log(results);
*/

