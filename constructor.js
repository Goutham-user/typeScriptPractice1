/**
 * public, private and protected are access modifiers
 */
var Point1 = /** @class */ (function () {
    // private x: number;
    // private y: number;
    /**syntax of constructor without optional symbol
     *  constructor(x:number, y: number){
        this.x = x;
        this.y = y;
    }
     */
    //  you can declare x and y as optional using ? symbol
    function Point1(x, y) {
        this.x = x;
        this.y = y;
        // The commented field below here is optional in typeScript it will auto generate this.x = x in typeScript to javaScript cpnverstion
        // this.x = x;
        // this.y = y;
    }
    Point1.prototype.draw = function () {
        console.log("x: " + this.x + " y: " + this.y);
    };
    return Point1;
}());
var objPoint1 = new Point1(1, 2);
objPoint1.draw();
