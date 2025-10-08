// find the second largest no in array 
function secondlargest(arr){
    let firstlargest=-Infinity;
    let secondlargest=-Infinity;

    if(arr.length<2){
        return null;
    }

    if(arr.value==secondlargest){

    }

    for (let i=0 ; i<arr.length ; i++){
        if(arr[i]>firstlargest){
            secondlargest=firstlargest;
            firstlargest=arr[i];
        }
        else if(arr[i]>secondlargest && arr[i]!=firstlargest){
            secondlargest=arr[i];
        }
    }
    return secondlargest;
}

let arr=[15,20,20,20,10,15];
let results=secondlargest(arr);
console.log(results);
