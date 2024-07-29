let circle = {
    radius: 100,
    center: {
        x: 0,
        y: 0
    },
    getType() {
        return (typeof circle.radius === "number") ?
            "circle" : "unknown";
    }
};
let figure = {...circle}
delete circle.radius //se deletar dar uknown
console.log(figure.getType())
console.log(circle.getType());