/**
 * public, private and protected are access modifiers 
 */

class Point1{
    // private x: number;
    // private y: number;

    /**syntax of constructor without optional symbol
     *  constructor(x:number, y: number){
        this.x = x;
        this.y = y;
    }
     */


    //  you can declare x and y as optional using ? symbol
    constructor(private x?:number,private y?: number){
        // The commented field below here is optional in typeScript it will auto generate this.x = x in typeScript to javaScript cpnverstion
        // this.x = x;
        // this.y = y;
    }

    draw(){
        console.log("x: " + this.x + " y: " + this.y);
    }
}

let objPoint1 = new Point1(1,2);


objPoint1.draw();