let createColoredPoint = function (x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);

    return {
        x,
        y,
        getColor() { return _color }
    }
};
let coloredPoint1 = createColoredPoint(1, 1, "red");// -> ... object under construction
let coloredPoint2 = createColoredPoint(2, 2, "green");// -> ... object under construction 
console.log(coloredPoint1.getColor());	// -> red
console.log(coloredPoint2.getColor());	// -> green
console.log(coloredPoint1._color);   // -> undefined !!!