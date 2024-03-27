// const myObject = {
//     js: 'javascript', 
//     j: 'java',
//     css: 'cascadial style sheet',
//     rb: 'ruby'
// }


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}