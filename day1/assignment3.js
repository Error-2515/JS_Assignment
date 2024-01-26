// to display user inputed 1-D array and display ppt provided 2-D array
// user inputed 1-D array
let n=Number(prompt("enter size of array"))
const arr=[]
for(let i=0;i<n;i++){
    arr[i]=Number(prompt(`enter ${i+1} element of numerical array`))
}
console.log(arr)
// ppt provided 2-D array
const arr2=[[1,2,3],[3,4,5],[5,8,7]]
for(i=0;i<3;i++){
   for(let j=0;j<3;j++){
    console.log(arr2[i][j])
   }
   console.log("")
}