

// 1.Simply Calculator
function Calculator() {
    let Number1 = Number(prompt("Enter the 1st Value:"))
    let Number2 = Number(prompt("Enter the 2nd Value:"))

    const operator = prompt("select a operator: +,-,*,/,%")

    let result;

    switch (operator) {
        case "+":
            result = Number1 + Number2;
            break;
        case "-":
            result = Number1 - Number2;
            break;
        case "*":
            result = Number1 * Number2;
            break;
        case "/":
            Number2 !== 0 ? result = Number1 / Number2 : "Enter a valid input"
            break;
        case "%":
            result = Number1 % Number2;
            break;

        default:
            console.log("Enter a valid operator")
    }
    console.log(`the ${Number1} and ${Number2} the operation ${operator} and the result is ${result}`)
}
Calculator()

// 2.Reverse str

let userstr=prompt("Enter the text:")

function Reaversed(){
    const Reaversedstr=userstr.split('').reverse().join('');
    console.log(`The Original text ${userstr} The Reversed text ${Reaversedstr}`)
}
Reaversed()

