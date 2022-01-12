var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function (a, b) {
        console.log("Inside draw method " + a + " Value of b " + b);
    };
    Point.prototype.getDistance = function () {
        console.log("Inside getDistance method");
    };
    return Point;
}());
var point = new Point();
point.draw(1, 2);
