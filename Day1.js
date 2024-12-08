// day1:

// 1.Odd or Even

let input=prompt("Enter the number:")
function CheckNum(){
    console.log(`${input % 2===0 ? "The Given Number is Even":"The Given Number is Odd"} `)
}
CheckNum()

// 2.Greatest among Three Numbers

var Number1=Number(prompt("Enter the 1st Number:"))
var Number2=Number(prompt("Enter the 2nd Number:"))
var Number3=Number(prompt("Enter the 3rd Number:"))

function Greatest(){
 if(Number1 > Number2 && Number1 > Number3){
     console.log("Number 1 is Greatest")
 }
 else if(Number2 > Number3){
     console.log("Number 2 is Greatest")
 }
 else{
     console.log("Number 3 is Greatest")
 }
}
Greatest()