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
// const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "yashbhatt@gmail.com"
    },
    {
    },
    {
    }
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course  = {
    coursename: "Js Master In One Week",
    price: "00090000",
    courseInstructor: "Yash"
}

// course.courseInstructor

// const {courseInstructor: insss} = course

console.log(insss);

// {
//     main: "www.ccc.com",
//     course: "webdexx",
//     price: "free"
// }