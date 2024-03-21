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

// console.log(login("Yash"));
console.log(loginUserMessage("Yash"));  //OverRight

function calculateCartPrice(...num1){
    return(num1)
}
// console.log(calculateCartPrice(333,33,22,1))

const user = {
    username: "yash",
    price: 99
}

function handleObject(anyobject){
    console.log(`User is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

const mynewArray = [22, 234, 345]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(mynewArray))
console.log(returnSecondValue([300, 200, 666]));