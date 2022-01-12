var getSet= (function(){
    function getSet(_x,_y) {
        this._x=_x;
        this._y=_y;
    }

        getSet.prototype.method3= function() {
            console.log("value of x " + this._x + " value of y " +this._y)
        };

        Object.defineProperty(getSet.prototype, "a", { 
            get: function() {
                return this._x;
            },
            set: function(value) {
                if(value<0)
                throw new Error("value is less than 0.")
                
                this._x = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(getSet.prototype, "b", {
            get: function() {
                return this._y;
            },
            set: function(value) {
                if(value<0)
                throw new Error("value is less than 0.")
                
                this._y = value;
            },
            enumerable: false,
            configurable: true
        });
     return getSet;
}());


let newObj = new getSet();

newObj.a = 10;
newObj.b =12;

newObj.method3();