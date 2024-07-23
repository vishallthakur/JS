// for in

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "cpp", "rb", "swift"]

for (const key in programming) {
    // console.log(key, programming[key]);
}

const map = new Map()

map.set('IN', "India")
map.set("USA", "United States of America")
map.set("FR", "France")

for (const key in map) {
    console.log(map)
}