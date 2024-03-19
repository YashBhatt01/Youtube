// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "uneirn"
tinderUser.name = "Jimy"
 

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"Yash",
            lastname:"Bhatt"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = {
    3: "c",
    4: "d"
}
// const obj3 = {obj1 , obj2}
const obj3 = Object.assign({}, obj1,obj2)
console.log(obj3)