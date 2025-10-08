// console.log("Hello");



//Write a  function that searches for an eleemnt in an array and retursn the index , if the element is not prsent then returns -1

// function search element(arr , )
var data = [10, 15, 20, 25, 30];
var input = 14;

function searchElement(arr, input) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === input) {
            return i;  // element mila → index return
        }
    }
    return -1; // loop ke baad bhi nahi mila
}

console.log(searchElement(data, input)); 
