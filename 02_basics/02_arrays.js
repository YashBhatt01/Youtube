const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["SuperHero", "Flash", "Batmen"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[2][4])

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);

const another_Arr = [1, 2, 3, [4, 5, 6],7,[ 8, 9,]]

const real_another_arr = another_Arr.flat(Infinity)
console.log(real_another_arr)



console.log(Array.isArray("Yash"))
console.log(Array.from("Yash"))
console.log(Array.from({name: "Yash"})) // VOVOVOVOVOVOVOVOVOVO
