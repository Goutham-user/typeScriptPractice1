class Point{
    a: number;
    b: number;
    draw(a,b) {
        console.log("Inside draw method " + a + " Value of b " + b);
    }

    getDistance(){
        console.log("Inside getDistance method");
    }
}

let point = new Point();
point.draw(1,2);
