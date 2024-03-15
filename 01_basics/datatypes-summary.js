// Primitive

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt;

const score  = 100
const scoreValue  = 100.00


const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id === anotherId)

const bigNumber = 23948393429084672908435n

// Reference (Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObject = {
    name: "Yash",
    age: 16, 
}

const myfunction = function () {
    console.log("Hellow India");
}

// console.log(typeof bigNumber);      //data type  === BIGINT 
// console.log(typeof outsideTemp);    //data type  === OBJECT
// console.log(typeof scoreValue);     //data type  === NUMBER
// console.log(typeof myfunction);     //data type  === FUNCTION
// console.log(typeof anotherId);      //data type  === SYMBOL



//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//      Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "JetMen"

let anothername = myYoutubename
anothername = "Yash"

console.log(myYoutubename);
console.log(anothername);

let user = {
    email: "user1@gmail.com",
    upi: "user@yt"
}

let userTwo = user 
userTwo.email = "Yash@gmail.com"

console.log(user.email);
console.log(userTwo.email);