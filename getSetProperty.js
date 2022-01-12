var getSetClass = /** @class */ (function () {
    function getSetClass(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    getSetClass.prototype.method_of = function () {
        console.log("value of x " + this._x + " value of y " + this._y);
    };
    Object.defineProperty(getSetClass.prototype, "x", {
        // get property makes the private feilds as read-only outside the class
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Value can't be less than 0.");
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(getSetClass.prototype, "y", {
        // get/set y
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Value can't be less than 0.");
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    return getSetClass;
}());
var objGetSet = new getSetClass();
objGetSet.x = 10;
objGetSet.y = 12;
objGetSet.method_of();