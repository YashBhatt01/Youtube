// singleton

// object literals
// Object.create

const mysym = Symbol("key1")

const jsUser = {
    name: "Yash",
    "full name": "Yash Bhatt",
    age: 16,
    mysym: "key1",
    location: "Banjarawala, Dehradun",
    email: "yash@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(jsUser.email);
console.log(typeof jsUser[mysym]);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);

jsUser.email = "yash@chatgpt.gpt"
// Object.freeze(jsUser)
jsUser.email = "yash@chatgpt.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hellow JS User")
    
}
jsUser.greetingTwo() = function(){
    console.log(`Hellow JS User,${this.name}`)
    
}

console.log(jsUser.greeting)
console.log(jsUser.greetingTwo)