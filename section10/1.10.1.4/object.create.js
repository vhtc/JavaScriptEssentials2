figure = {
    getType: function () {
        return this.type ? this.type : "unknown";
    }
};

let circle = Object.create(figure)

circle.type = "circle"
circle.center = { x: 0, y: 0 }
circle.radius = 100
console.log(circle.getType())

Object.setPrototypeOf(circle, figure)

let proto = Object.getPrototypeOf(circle)


console.log(figure.getType())
console.log(proto)
