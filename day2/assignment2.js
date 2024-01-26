// using for each loop to get numericals updated and string to array to new array to uppercase
let num=[1,2,3,4,5]
num.forEach((e,i,a)=>{
    a[i]=e*2
    
})
console.log(`${num}`)

const str="i am learning javascript"
const arrofstr=str.split(" ")
let mappedstr=[]
arrofstr.map((e,i)=>{
    e=e.toUpperCase()
    return mappedstr[i]=e
})
const upperstr=mappedstr.join(" ")
console.log(upperstr)
