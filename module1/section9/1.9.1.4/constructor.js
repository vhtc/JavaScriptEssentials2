let ColoredPoint = function (x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);

    this.x = x;
    this.y = y;
    this.getColor = function () { return _color };
}

let coloredPoint1 = new ColoredPoint(1, 1, "red");
let coloredPoint2 = new ColoredPoint(2, 2, "green");


console.log(coloredPoint1.getColor());	// -> red
console.log(coloredPoint2.getColor());	// -> green
console.log(coloredPoint1._color);   // -> undefined !!!


console.log(coloredPoint1.constructor.name);
console.log(typeof coloredPoint1.constructor)
