let circle = {
    radius: 100,
    center: {
        x: 0,
        y: 0
    },
    getType() {
        return typeof this.radius === "number" ? "circle" : "unknown";
    }
};

console.log(circle.getType());
let figure = { ...circle };
delete circle.radius;
console.log(figure.radius);
console.log(figure.getType()); // "circle"