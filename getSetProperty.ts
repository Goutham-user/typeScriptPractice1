class getSetClass{
    constructor(private _x?:number, private _y?:number){   
    }


    method_of(){
        console.log("value of x " + this._x + " value of y " + this._y );
    }

    // get property makes the private feilds as read-only outside the class
    get x(){
        return this._x;
    }
    set x(value){
        if(value<0)
        throw new Error("Value can't be less than 0.")

        this._x= value;
    }
    // get/set y
    get y(){
        return this._y;
    }
    set y(value){
        if(value<0)
        throw new Error("Value can't be less than 0.")

        this._y= value;
    }
}

let objGetSet = new getSetClass();
objGetSet.x= 10;
objGetSet.y =12;
objGetSet.method_of();