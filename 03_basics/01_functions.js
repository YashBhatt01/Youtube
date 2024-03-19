// function sayMyName(){
//     console.log("Yash");
//     console.log("Bhatt");
// }
// // sayMyName()

// function addTwoNumbers(number1, number2){
// console.log(number1 + number2);

function addTwoNumbers(number1, number2){
// let result = number1 + number2;
// return result
    return (number1 + number2)
}

const result = addTwoNumbers(6, "4")

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
    console.log("Please enter a user name");
}
else{
    return `${username} just logged in`
}
}

// console.log(loginUserMessage("Yash"));
console.log(loginUserMessage("Yash"));  //OverRight
