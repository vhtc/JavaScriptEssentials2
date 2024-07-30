// let criarPonto = function (x, y) {
//     let obj = {}
//     obj.x = x
//     obj.y = y

//     return obj
// }

// let criarPonto = function (x, y) {
//     return {
//         x: x,
//         y: y
//     }
// }

// let criarPonto  = function(x, y) {
//     return {
//         x,
//         y
//     }
// }

let criarPonto  = (x, y) => ({x, y});


let ponto1 = criarPonto(1, 1)
let ponto2 = criarPonto(2, 2)

console.log(ponto1)
console.log(ponto2)

