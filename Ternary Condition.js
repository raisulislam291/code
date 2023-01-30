var num1 = Number(prompt("Enter a number "));
var num2 = Number(prompt("Enter 2nd number "));
var num3 = Number(prompt("Enter 3rd number "));

var result = num1>num2 && num1>num3 ? num1 : num2>num1 && num2>num3 ? num2 : num3
document.write("Your Largest Number Is "+result);

// if(num1>num2 && num1>num3){
//     document.write(num1);
// }
// else if (num2>num1 && num2>num3){
//     document.write(num2);
// }
// else
// document.write(num3);