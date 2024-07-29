let point = {
    x: 0,
    y: 0,
    moveHorizontal: function (distancia) {
        this.x = this.x + distancia
    },
    moveVertical: function (distancia) {
        this.y = this.y + distancia
    }
}

console.log(point.x)
point.moveHorizontal(30)
console.log(point.x)