// create a simple calculator

let a=Number(prompt("enter 1st value"))
let b=Number(prompt("enter 2nd value"))
let ao=prompt("select operator such as +,-,*,/")
let op
switch(ao){
    case '+':
        op=a+b
        console.log(op)
        break;
    case '-':
        op=a-b
        console.log(op)
        break;
    case '*':
        op=a*b
        console.log(op)
        break;
    case '/':
        op=a/b
        console.log(op)
        break;
    default:
        console.log("invalid operator entered")

}