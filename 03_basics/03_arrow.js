const user = {
    username: "Yash",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to our website`);
        console.log(this)
    }
}
// welcomeMessage(username)
// user.welcomeMessage()
// user.username = "Mr Susheel Chandra Bhatt, From gadwaal"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);
// }
// chai()

// const chai = function (){
//     let username = "Yash"
//     console.log(this.username)
// }
// chai()

const chai = () => {
    let username = "Yash"
    console.log(this.username)
}
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3, 7));

const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(3, 7));


// const myArray = [3, 4 ,5 ,6 ,6]
