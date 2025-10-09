/*
print this line of code 
* * * * 
* * * * 
* * * * 
* * * *

*/



// let n=4;
// for (let i=0;i<n;i++){
//     let row="";
// for (let j=0;j<n;j++){
// row=row+"* "
// }
// console.log(row);

// }




/*
2) print this line of code 
* 
* *
* * *
* * * *

*/



// for (let i=0;i<4;i++){
//     let row="";
// for (let j=0;j<=i;j++){
// row=row+"* "
// }
// console.log(row);

// }

/*
q....)
1
 1 2
 1 2 3
 1 2 3 4
 1 2 3 4 5
*/


for (let i=0;i<=4;i++){
    let row="";
for (let j=0;j<=i;j++){
row= row +" " + ( j+1);
}
console.log(row);

}

