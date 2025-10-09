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

// for (let i=0;i<=4;i++){
//     let row="";
// for (let j=0;j<=i;j++){
// row= row +" " + ( j+1);
// }
// console.log(row);

// }

/*
 1
 2 2
 3 3 3
 4 4 4 4
 5 5 5 5 5
 */

// for (let i=0;i<=4;i++){
//     let row="";
// for (let j=0;j<=i;j++){
// row= row +" " + ( i+1);
// }
// console.log(row);

// }

/*
 1 2 3 4 5
 1 2 3 4
 1 2 3
 1 2
 1
 */

// for (let i = 0; i < 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     row = row + " " + j;
//   }
//   console.log(row);
// }

/*
    *
   **
  ***
 ****
*****
*/


// let n=5
// for (let i = 0; i < n; i++) {
//     let row="";
//     for (let j=0 ; j<(n-(i+1));j++){
//         row=row+" ";
//     }
//     for (let k=0; k<(i+1);k++){
//         row=row+"*";
//     }
//     console.log(row);
    
// }


/*
1
10
101
1010
10101
*/


let n=5;
for (let i = 0; i < n; i++) {
   let row="";
    let toggle = 1;
    for(j=0;j<i+1;j++){
        row=row+toggle;
    if(toggle==1){
        toggle=0
    }else {
        toggle=1;
    }
    }
console.log(row);

}