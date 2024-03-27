// for of

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    // console.log(i);
}

const greeting = ["HELLOW WORLD"]
for (const greet of greeting) {
    // console.log(`Hellow to you ${greet}`);    
}

// Map

const map = new Map()
map.set('Ind', "INDIA")
map.set('USA', "INDIA ka beta")

// console.log(map)

for (const [key, value] of map) {
    console.log(key + '||||' + value);
}