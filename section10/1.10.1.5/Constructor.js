let Figure = function(){
    this.getType = function(){
        return this.type ? this.type : "unknown"
    }
}

let figure = new Figure

let Circle = function(center, radius){
    this.type = "circle"
    this.center = center
    this.radius = radius
}

Circle.prototype = figure