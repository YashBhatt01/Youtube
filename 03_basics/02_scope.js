let a = 10
const b = 20
var c = 30

// {} // It is scope


console.log(a)
console.log(b)
console.log(c)


// ++++++++++++++++++++++++ Interesting 😊++++++++++++++++++++++++++

console.log(addOne(7))

function addOne(num){
    return num + 1 
}

addTwo(7)
const addTwo = function(num){
    return num  + 2
}                                          
