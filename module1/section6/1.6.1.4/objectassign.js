let p = {
    x: 10,
    y: 20
}

let p2 = {}
let p3 = {}
let p4 = {}
Object.assign(p2, p)

console.log(p)
console.log(p)
console.log(p2)

Object.assign(p3, p, { z: 100 })
console.log(p3)

Object.assign(p4, p3, { z: 200, color: "red" })
console.log(p4)