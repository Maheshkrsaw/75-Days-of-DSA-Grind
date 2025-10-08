// find the second largest no in array 
function secondlargest(arr){
    let firstlargest=-Infinity;
    let secondlargest=-Infinity;

    for (let i=0 ; i<arr.length ; i++){
        if(arr[i]>firstlargest){
            secondlargest=firstlargest;
            firstlargest=arr[i];
        }
        else if(arr[i]>secondlargest){
            secondlargest=arr[i];
        }
    }
    return secondlargest;
}

let arr=[14,19,0,2,8,5,6];
let results=secondlargest(arr);
console.log(results);
