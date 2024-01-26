// creating functions that give longest string in an array and also concatinating 2 strings in an array
// creating function to find factorial

let n=Number(prompt("enter size of array"))
let temp=0
let i
const arr=[]
let long
let joined
let num
for(let i=0;i<n;i++){
    arr[i]=String(prompt(`enter ${i+1} element of string array`))
}

function longest(arr){
    for(i=0;i<n;i++){
        if(arr[i].length>temp){
            temp=arr[i].length
            long=arr[i]
        }
    }
    return long
}
console.log(`${longest(arr)} is the longest string with a size of ${temp}`)
function joint(arr){
    joined=[arr.join("")]
    return joined
}
console.log(`${joint(arr)} is the new string`)
num=Number(prompt("put in factorial number"))
const factorial=(num)=>{
    let fac=1
    i=1
    while(i<=num){
        fac=fac*i
        i++
    }
    return fac
}
console.log(`${factorial(num)} is the factorial`)
